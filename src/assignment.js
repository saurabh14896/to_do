import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  }
}))

function Assignment() {
  const classes = useStyles();
  const [name,setName] = useState(null);
  const [inputs, setInputs] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inputs", inputs);
  };

  const handleChangeInput = (index, event) => {
    const values =[...inputs];
    values[index][event.target.name]=event.target.value;
    setInputs(values);
  }
  const handleChangeCheck = (index, event) => {
    const values =[...inputs];
    values[index][event.target.name]=event.target.checked;
    setInputs(values);
  }

  const handleAddFields = () => {
    if(name){
    setInputs([...inputs, { language: name, check: false, disable:false},])
    setName("");
  } 
  }

  const handleRemoveFields = (index) => {
    const values  = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  }
  return (
    <Container style={{marginTop:50}}>
      <Typography variant="h5" align="center"><b>Add Item</b></Typography>
        <Divider style={{paddingTop: 2,paddingBottom: 2,background:'#000000',}}/>
      <form className={classes.root} onSubmit={handleSubmit}>
        
            <Grid spacing={1} container justify="center">
                <Grid item md={11} xs={10}>
                    <TextField
                    name="lang"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                </Grid>
                <Grid item md={1} xs={1}>
                    <IconButton
                        style={{marginTop:5}}
                        onClick={handleAddFields}
                        >
                    <AddIcon fontSize="large" style={{color:'#000000'}}/>
                    </IconButton>
                </Grid>
            </Grid>
            
<br/>
<Typography variant="h5" align="center"><b>Todo</b></Typography>
        <Divider style={{paddingTop: 2,paddingBottom: 2,background:'#000000',}}/><br/>
{ inputs.map((input,index) => (
          <div key={index}>
              {!input.check ?
              <Grid spacing={1} container>
                  <Grid item md={1} xs={1} style={{marginTop:10}}>
                  <Checkbox checked={input.check} name="check"
                   onChange={event => handleChangeCheck(index, event)} />
                  </Grid>
                <Grid item md={6} xs={6}>
                    {input.disable?
                            <TextField
                            name="language"
                            fullWidth
                            variant="outlined"
                            value={input.language}
                            onChange={event => handleChangeInput(index, event)}
                            />          :
                        <Typography variant="subtitle1" style={{marginTop:15}}>
                            {input.language}</Typography>}
                </Grid>
                <Grid item md={1} xs={1}>
                    <IconButton disabled={input.length === 1} onClick={() => handleRemoveFields(index)}>
                    <RemoveIcon/>
                    </IconButton>
                </Grid>
                <Grid item md={1} xs={1}>
                    <IconButton 
                     name="disable"  
                     onClick={() => {
                        const values = [...inputs];
                            if(input.disable){
                                values[index][`disable`]=false}
                            else{
                                values[index][`disable`]=true}
                        setInputs(values);}}
                    >
                    <EditIcon color={input.disable ?"secondary":"inherit"}/>
                    </IconButton>
                </Grid>
            </Grid>:null}
          </div>
        )) }
<br/>
    <Typography variant="h5" align="center"><b>Completed</b></Typography>
        <Divider style={{paddingTop: 2,paddingBottom: 2,background:'#000000',}}/>
        <br/>
{ inputs.map((input,index) => (
          <div key={index}>
              {input.check ?
              <Grid spacing={1} container>
              <Grid item md={1} xs={1} style={{marginTop:10}}>
              <Checkbox checked={input.check} name="check"
               onChange={event => handleChangeCheck(index, event)} />
              </Grid>
            <Grid item md={6} xs={6}>
                {input.disable?
                        <TextField
                        name="language"
                        fullWidth
                        variant="outlined"
                        value={input.language}
                        onChange={event => handleChangeInput(index, event)}
                        />          :
                    <Typography variant="subtitle1" style={{marginTop:15}}>
                        <del>{input.language}</del></Typography>}
            </Grid>
            <Grid item md={1} xs={1}>
                <IconButton disabled={input.length === 1} onClick={() => handleRemoveFields(index)}>
                <RemoveIcon/>
                </IconButton>
            </Grid>
            <Grid item md={1} xs={1}>
                <IconButton 
                 name="disable"  
                 onClick={() => {
                    const values = [...inputs];
                        if(input.disable){
                            values[index][`disable`]=false}
                        else{
                            values[index][`disable`]=true}
                    setInputs(values);}}
                >
                <EditIcon color={input.disable ?"secondary":"inherit"}/>
                </IconButton>
            </Grid>
        </Grid>:null}
          </div>
        )) }
        {/*<Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={handleSubmit}
        >Send</Button>*/}
      </form>
    </Container>
  );
}

export default Assignment;