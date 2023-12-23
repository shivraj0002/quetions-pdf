import * as React from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid,
    GridEditSingleSelectCell,
    GridCellEditStopReasons,
    GridActionsCellItem,
} from '@mui/x-data-grid';
import { randomPrice } from '@mui/x-data-grid-generator';
import DeleteIcon from '@mui/icons-material/Delete';



export default function SavedTable({ rows, setRows }) {
    const editingRow = React.useRef(null);

    const deleteUser = React.useCallback(
        (id) => () => {
            setTimeout(() => {
                setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            });
        },
        [],
    );

    const columns = [
        { field: 'question', headerName: 'Question', flex: 1.5, editable: true },
        { field: 'answer', headerName: 'Answer', flex: 1, editable: true },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            width: 80,
            getActions: (params) => [
                <GridActionsCellItem
                    key={""}
                    icon={<DeleteIcon color='error' />}
                    label="Delete"
                    onClick={deleteUser(params.id)}
                />
            ],
        },
    ];

    const handleCellEditStart = (params) => {
        editingRow.current = rows.find((row) => row.id === params.id) || null;
    };

    const handleCellEditStop = (params) => {
        if (params.reason === GridCellEditStopReasons.escapeKeyDown) {
            setRows((prevRows) =>
                prevRows.map((row) =>
                    row.id === editingRow.current?.id
                        ? { ...row, account: editingRow.current?.account }
                        : row,
                ),
            );
        }
    };

    const processRowUpdate = (newRow) => {
        setRows((prevRows) =>
            prevRows.map((row) => (row.id === editingRow.current?.id ? newRow : row)),
        );
        return newRow;
    };

    return (
        <Box sx={{ width: '100%', height: 300 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onCellEditStart={handleCellEditStart}
                onCellEditStop={handleCellEditStop}
                processRowUpdate={processRowUpdate}
            />
        </Box>
    );
}
