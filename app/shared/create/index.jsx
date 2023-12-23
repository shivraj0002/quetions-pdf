'use client'
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import SavedTable from './savedTable';
import { v4 as uuidv4 } from 'uuid';
import useSnackbar from '@/app/hooks/useSnakbar';



export default function CreatePage() {
    const [rows, setRows] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const { openSnackbar, SnackbarComponent } = useSnackbar();

    const submitHandler = (e) => {
        e.preventDefault();
        if (!question) {
            openSnackbar('error', 'Please enter a question');
            return
        }
        if (!answer) {
            openSnackbar('error', 'Please enter an answer');
            return
        }

        let row = { id: uuidv4(), question: question, answer: answer };
        setRows([...rows, row]);
        setQuestion("");
        setAnswer("");
        openSnackbar('success', 'Question added in table successfully!');
    };

    return (
        <Box sx={{ flexGrow: 1 }} gap={10} mt={3} p={5}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <form onSubmit={submitHandler}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField label="Question" color="secondary" autoFocus fullWidth value={question} onChange={(e) => { setQuestion(e.target.value) }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField sx={{ mt: 3 }} label="Answer" color="primary" fullWidth value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button sx={{ mt: 3 }} variant="contained" size="medium" color='secondary' fullWidth type='submit'>
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                <Grid item xs={12}>
                    <SavedTable rows={rows} setRows={setRows} />
                </Grid>
            </Grid>
            {SnackbarComponent}
        </Box>
    );
}
