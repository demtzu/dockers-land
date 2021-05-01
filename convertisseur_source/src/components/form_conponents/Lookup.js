import React from 'react'
import Select from "@material-ui/core/Select"
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';
import styled from 'styled-components'

const InFront = styled.div `
   
`

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffa000',
        },
        secondary: {
            light: '#ffa000',
            main: '#ffa000',
            contrastText: '#ffa000',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
        maxHeight: 200
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Lookup = ({data, updateFunction, value, label, dataValue, dataName, forName}) => {
    const classes = useStyles();
    return (
        <InFront>
            <ThemeProvider theme={theme}>
                <FormControl className={classes.formControl}>
                    <InputLabel>{label}</InputLabel>
                    <Select
                        name={forName}
                        value={value}
                        onChange={updateFunction}
                    >
                        {
                            data.map(entry => {
                                return <MenuItem key={entry[dataValue]} value={entry[dataValue]}>{entry[dataName]}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </ThemeProvider>
        </InFront>
    )
}

export default Lookup