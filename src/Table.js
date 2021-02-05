import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        border: '1px solid #707070'
    },
    tableColView: {
        borderRight: '1px solid #707070',
        borderBottom: '0px'
    },
    tableHeadView: {
        borderRight: '1px solid #707070',
        borderBottom: '1px solid #707070',
        opacity: 0.65,
        font: 'normal normal normal 13px/17px Montserrat'
    }
});

const rows = [
    { serialNo: '1', FIRSNo: '2', FIRReg: 'xx', registeredDate: 'xx', district: 'xx', state: 'xx', case: 'xx', jailed: 'xx', released: 'xx', status: 'xx' },
    { serialNo: '1', FIRSNo: '2', FIRReg: 'xx', registeredDate: 'xx', district: 'xx', state: 'xx', case: 'xx', jailed: 'xx', released: 'xx', status: 'xx' },
    { serialNo: '1', FIRSNo: '2', FIRReg: 'xx', registeredDate: 'xx', district: 'xx', state: 'xx', case: 'xx', jailed: 'xx', released: 'xx', status: 'xx' },
    { serialNo: '1', FIRSNo: '2', FIRReg: 'xx', registeredDate: 'xx', district: 'xx', state: 'xx', case: 'xx', jailed: 'xx', released: 'xx', status: 'xx' },
    { serialNo: '1', FIRSNo: '2', FIRReg: 'xx', registeredDate: 'xx', district: 'xx', state: 'xx', case: 'xx', jailed: 'xx', released: 'xx', status: 'xx' },
];

const headers = [
    { header: 'S.No.', key: 'serialNo' },
    { header: 'FIR S.No.', key: 'FIRSNo' },
    { header: 'FIR Reg.', key: 'FIRReg' },
    { header: 'Registered Date', key: 'registeredDate' },
    { header: 'District', key: 'district' },
    { header: 'State', key: 'state' },
    { header: 'Case', key: 'case' },
    { header: 'Jailed', key: 'jailed' },
    { header: 'Released', key: 'released' },
    { header: 'Status', key: 'status' }
]



export default function BasicTable() {


    const classes = useStyles();

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <React.Fragment key={header.header}>
                                <TableCell className={classes.tableHeadView}>{header.header}</TableCell>
                            </React.Fragment>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index.toString()}>
                            {headers.map((header) => (
                                <React.Fragment key={header.key}>
                                    <TableCell className={classes.tableColView}>{row[header.key]}</TableCell>
                                </React.Fragment>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
