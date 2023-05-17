import {FormControlLabel, Switch} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, {useEffect, useState} from 'react';
import Utils from "../../../common/utils.js";
import OutletContainer from "../../../components/OutletContainer.jsx";
import {useAuthentication} from "../../../providers/AuthProvider";
import Auth, {UserAccess} from "../../../common/auth";
import {useNotification} from "../../../providers/NotificationProvider.jsx";
import UnauthorizedPage from "../../UnauthorizedPage";
import AdminTable from "../../../components/AdminTable";
import API from "../../../api/api";


const SwitchCell = ({value, role, uuid, update}) => {
    const [data, setData] = useState(value)
    const notify = useNotification()
    const label = data ? "Sim" : "Não"
    const [disabled, setDisabled] = useState(false)

    const handleChange = (e) => {
        const {checked} = e.target
        setData(checked)
        update(checked)
        const formData = {
            uuid: uuid,
            role: role,
            enabled: checked,
        }
        setDisabled(true)
        API.User.UpdateRole(formData, (res) => {
            setDisabled(false)
        }, (err) => {
            notify.show(err.message, "error")
        })
    }
    return (
        <FormControlLabel
            disabled={disabled}
            label={label}
            value={data}
            control={<Switch color="primary" checked={value} value={label} />}
            onChange={handleChange}
        />
    )
}

const AdminSwitch = (value, table, update) => (
    <SwitchCell
        role={UserAccess.ADMIN}
        value={value}
        uuid={table.rowData[0]}
        update={update}
    />
)

const ManagerSwitch = (value, table, update) => (
    <SwitchCell
        role={UserAccess.MANAGER}
        value={value}
        uuid={table.rowData[0]}
        update={update}
    />
)
const BillingSwitch = (value, table, update) => (
    <SwitchCell
        role={UserAccess.BILLING}
        value={value}
        uuid={table.rowData[0]}
        update={update}
    />
)
const SellerSwitch = (value, table, update) => (
    <SwitchCell
        role={UserAccess.SELLER}
        value={value}
        uuid={table.rowData[0]}
        update={update}
    />
)
const ClientSwitch = (value, table, update) => (
    <SwitchCell
        role={UserAccess.CLIENT}
        value={value}
        uuid={table.rowData[0]}
        update={update}
    />
)

const entityName = {
    plural: "Usuários",
    singular: "Usuário",
}

const columns = [
    {
        name: "uuid",
        label: "ID",
    },
    {
        name: "name",
        label: "Nome",
    },
    {
        name: "phone",
        label: "Telefone",
    },
    {
        name: "isAdmin",
        label: "Admin",
        customCell: AdminSwitch,
    },
    {
        name: "isManager",
        label: "Entrega",
        customCell: ManagerSwitch,
    },
    {
        name: "isBilling",
        label: "Balcão",
        customCell: BillingSwitch,
    },
    {
        name: "isSeller",
        label: "Caixa",
        customCell: SellerSwitch,
    },
    {
        name: "isClient",
        label: "Cliente",
        customCell: ClientSwitch,
    },
    {
        name: "createdAt",
        label: "Criado em",
    },
    {
        name: "updatedAt",
        label: "Atualizado em",
    },
];

const UsersPage = () => {
    const auth = useAuthentication()
    const notify = useNotification()
    const [isLoading, setIsLoading] = useState(true)
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        if (Auth.isAdmin(auth)) {
            API.User.List({}, (res) => {
                const userList = res.getUsersList().map((i) => {
                    const user = Utils.sanitizeProto(i)
                    const role = user.role
                    user.isAdmin = UserAccess.ADMIN === (role & UserAccess.ADMIN)
                    user.isManager = UserAccess.MANAGER === (role & UserAccess.MANAGER)
                    user.isBilling = UserAccess.BILLING === (role & UserAccess.BILLING)
                    user.isSeller = UserAccess.SELLER === (role & UserAccess.SELLER)
                    user.isClient = UserAccess.CLIENT === (role & UserAccess.CLIENT)
                    return user
                })

                setTableData(userList)
                setIsLoading(false)
            }, (err) => {
                notify.show(err.message, "error")
            })
        }
    }, [])

    if (!Auth.isAdmin(auth)) {
        return <UnauthorizedPage/>
    }
    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <OutletContainer>
            <AdminTable
                entityName={entityName}
                columns={columns}
                data={tableData}
            />
        </OutletContainer>

    )
};

export default UsersPage;
