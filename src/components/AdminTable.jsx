import Typography from "@mui/material/Typography";
import React, {useEffect, useState} from 'react';
import MUIDataTable, {ExpandButton} from "mui-datatables";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton, Button, styled, FormControlLabel, Switch} from "@mui/material";
import ConfirmDialog from "./ConfirmDialog";
import EntityDialog from "./EntityDialog.jsx";
import AddIcon from '@mui/icons-material/Add';


const tableOptions = {
    draggableColumns: {
        enabled: false,
    },
    download: false,
    print: false,
    viewColumns: false,
    selectableRowsHeader: false,
    responsive: "standard",
    selectableRows: "none",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25, 50, 100],
}

const initialExistingData = (structure, ex) => {
    const data = {}
    structure.forEach(entity => {
        if (!ex) {
            data[entity.name] = {
                value: "",
                error: null,
            }
            return
        }
        let value = ex[entity.name]
        if (entity.type === "select") {
            value = entity?.options.find(opt => opt.label === value).value
        }
        data[entity.name] = {
            value,
            error: null,
        }
    })
    return data
}

const AdminTable = ({entityName, columns, data, onCreate, onUpdate, onDelete, structure}) => {
    // We need to keep track:
    // Confirmation dialog for delete
    const [deleteOpen, setDeleteOpen] = useState(false);

    // Entity dialog for edit/create
    const [entityDialog, setEntityDialog] = useState({
        open: false,
        existingData: initialExistingData(structure, null)
    })

    // Existing data for edit or delete
    const [currentUUID, setCurrentUUID] = useState(null);


    // Check if we have edit and delete functions
    const hasUpdate = typeof onUpdate === "function"
    const hasDelete = typeof onDelete === "function"

    // Add options to columns
    // We could externalize it if necessary
    columns.forEach(col => {
        const enabled = col.name !== "actions"
        const isDate = col.name === "createdAt" || col.name === "updatedAt"
        const isPrice = col.name === "price"
        col.options = {
            filter: enabled,
            sort: enabled,
            customBodyRender: (value, tableMeta, updateValue) => {
                if (isDate) return <DateCell value={value}/>
                if (isPrice) return PriceCell(value)
                return value
            }
        }
    })

    const openEntityDialog = (row) => {
        setCurrentUUID(row?.uuid)
        setEntityDialog({
            open: true,
            existingData: initialExistingData(structure, row)
        })
    }
    const closeEntityDialog = () => {
        setCurrentUUID(null)
        setEntityDialog({
            open: false,
            existingData: initialExistingData(structure, null)
        })

    }

    const openDeleteDialog = (row) => {
        setCurrentUUID(row.uuid)
        setDeleteOpen(true)
    }
    const closeDeleteDialog = () => {
        setCurrentUUID(null)
        setDeleteOpen(false)
    }

    // Add actions column for every row
    data.forEach(row => {
        row.actions = (
            <>
                {hasUpdate &&
                    <IconButton aria-label="edit" onClick={() => openEntityDialog(row)}>
                        <EditIcon />
                    </IconButton>
                }
                {hasDelete &&
                    <IconButton aria-label="delete" onClick={() => openDeleteDialog(row)}>
                        <DeleteIcon />
                    </IconButton>
                }
            </>
        )
    })

    const handleDeleteConfirm = () => {
        onDelete(currentUUID)
        closeDeleteDialog()
    }
    const handleEntityConfirm = (data, isUpdate) => {
        if (Object.values(data).some(entity => !!entity.error)) {
            return
        }
        if (isUpdate) {
            onUpdate(currentUUID, data)
        } else {
            onCreate(data)
        }
        closeEntityDialog()
    }

    return (
        <>
            <ConfirmDialog
                danger
                open={deleteOpen}
                confirmDialog={handleDeleteConfirm}
                closeDialog={closeDeleteDialog}
            />
            <EntityDialog
                open={entityDialog.open}
                confirmDialog={handleEntityConfirm}
                closeDialog={closeEntityDialog}
                entityName={entityName}
                structure={structure}
                existingData={entityDialog.existingData}
                currentUUID={currentUUID}
            />
            <MUIDataTable
                title={<TitleComponent entityName={entityName} handleClick={() => openEntityDialog(null)}/>}
                data={data}
                columns={columns}
                options={tableOptions}
            />
        </>
    );
};

const TitleContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    gap: "5px",
})

const TitleComponent = ({entityName, handleClick}) => {
    return (
        <TitleContainer>
            <Button
                onClick={handleClick}
                color={"success"}
                startIcon={<AddIcon/>}
                variant={"contained"}
            >
                Adicionar
            </Button>
            <Typography variant="h5">{entityName.plural}</Typography>
        </TitleContainer>
    )
}

const DateCell = ({value}) => {
    const split = value.split(" ")
    const date = split[0]
    const time = split[1]
    return (
        <>
            {date}
            <br/>
            {time}
        </>
    )
}

const PriceCell = (value) => {
    const nf = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    return nf.format(value/100);
}

const SwitchCell = (value) => {
    return (
        <FormControlLabel
            label={value ? "Sim" : "Não"}
            value={value ? "Sim" : "Não"}
            control={
                <Switch color="primary" checked={value} value={value ? "Sim" : "Não"} />
            }
        />
    )
}
export default AdminTable;
