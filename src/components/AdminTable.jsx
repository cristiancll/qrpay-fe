import Typography from "@mui/material/Typography";
import React, {useRef, useState} from 'react';
import MUIDataTable, {ExpandButton} from "mui-datatables";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton, Button, styled} from "@mui/material";
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
        data[entity.name] = {
            value: ex?.[entity.name] ?? "",
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
    const [entityOpen, setEntityOpen] = useState(false);

    // Existing data for edit or delete
    const [existingData, setExistingData] = useState(initialExistingData(structure, null));
    const [currentUUID, setCurrentUUID] = useState(null);

    // Data to delete
    // const [deleteData, setDeleteData] = useState(null);

    // Check if we have edit and delete functions
    const hasUpdate = typeof onUpdate === "function"
    const hasDelete = typeof onDelete === "function"

    // Add options to columns
    // We could externalize it if necessary
    columns.forEach(col => {
        const enabled = col.name !== "actions"
        col.options = {
            filter: enabled,
            sort: enabled,
        }
    })

    const openEntityDialog = (row) => {
        setExistingData(initialExistingData(structure, row))
        setCurrentUUID(row?.uuid)
        setEntityOpen(true)
    }
    const closeEntityDialog = () => {
        setExistingData(initialExistingData(structure, null))
        setCurrentUUID(null)
        setEntityOpen(false)
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
                open={entityOpen}
                confirmDialog={handleEntityConfirm}
                closeDialog={closeEntityDialog}
                entityName={entityName}
                structure={structure}
                existingData={existingData}
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

export default AdminTable;
