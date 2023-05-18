import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from 'react';
import Utils from "../../../common/utils.js";
import {useBillingClient} from "../../../providers/BillingClientProvider.jsx";

const BillingClientConfirmOrderDialog = () => {
    const {confirmDialogOpen, closeConfirmDialog, confirmOrder, user} = useBillingClient()

    return (
        <Dialog open={confirmDialogOpen} onClose={closeConfirmDialog} fullWidth={true} maxWidth={"sm"}>
            <DialogTitle>
                {user.name}
                <Typography>{user.phone}</Typography>
            </DialogTitle>
            <DialogContent>

                <OrderTable/>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeConfirmDialog} color={"error"}>Cancelar</Button>
                <Button onClick={confirmOrder} autoFocus color={"success"}>
                    PAGAMENTO RECEBIDO
                </Button>
            </DialogActions>
        </Dialog>
    );
};


const OrderTable = () => {
    const {total, order} = useBillingClient()
    return (
        <TableContainer component={Paper}>
            <Table aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            Item
                        </TableCell>
                        <TableCell align="right">
                            Qtd.
                        </TableCell>
                        <TableCell align="right">
                            Preço
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { order && Object.keys(order).map((key, i) => <OrderTableRow key={`o_${i}`} o={order[key]}/>)}
                    <TableRow>
                        <TableCell />
                        <TableCell>
                            Total
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant={"h5"}>
                                { Utils.formatPrice(total) }
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const OrderTableRow = ({o}) => {
    return (
        <TableRow>
            <TableCell align="left">
                {o.name}
            </TableCell>
            <TableCell align="right">
                {o.quantity}
            </TableCell>
            <TableCell align="right">
                {Utils.formatPrice(o.price)}
            </TableCell>
        </TableRow>
    )
}

export default BillingClientConfirmOrderDialog;
