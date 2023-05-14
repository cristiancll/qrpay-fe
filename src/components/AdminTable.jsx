import React, {useRef, useState} from 'react';
import MUIDataTable, {ExpandButton} from "mui-datatables";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton} from "@mui/material";
import ConfirmDialog from "./ConfirmDialog";
import UpdateDialog from "./UpdateDialog";
import AddBoxIcon from '@mui/icons-material/AddBox';

const AdminTable = ({title, columns, data, onEdit, onDelete}) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const updateData = useRef(null)
    const deleteData = useRef(null)
    const hasEdit = typeof onEdit === "function"
    const hasDelete = typeof onDelete === "function"
    columns.forEach(col => {
        col.options = {
            filter: true,
            sort: true,
        }
    })

    const handleEdit = (row) => {
        updateData.current = row
        setUpdateOpen(true)
    }
    const handleDelete = (row) => {
        deleteData.current = row.uuid
        setDeleteOpen(true)
    }

    data.forEach(row => {
        row.actions = (
            <>
                {hasEdit &&
                    <IconButton aria-label="edit" onClick={() => handleEdit(row)}>
                        <EditIcon />
                    </IconButton>
                }
                {hasDelete &&
                    <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
                        <DeleteIcon />
                    </IconButton>
                }
            </>
        )
    })
    return (
        <>
            <ConfirmDialog
                onConfirm={() => onDelete(deleteData.current)}
                openState={[deleteOpen, setDeleteOpen]}
                danger
            />
            <UpdateDialog
                onConfirm={() => onEdit(updateData.current)}
                openState={[updateOpen, setUpdateOpen]}
            />
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
            />
        </>
    );
};

export default AdminTable;
