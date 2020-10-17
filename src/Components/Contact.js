import React from 'react';

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

export const Contact = () => {

    const [details, setDetails] = React.useState([]);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [value, setValue] = React.useState('');
    const [number, setNumber] = React.useState(1);
    const [displayNumber, setDisplayNumber] = React.useState('');
    const [status, setStatus] = React.useState('');
    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    const onHandleChange = (event) => {
        setStatus(event.target.value);
    };
    const statusHandleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (e) => {
        const contactDetails = {
            'firstName': firstName,
            'lastName': lastName,
            'phone': displayNumber,
            'gender': value,
            'status': status
        }
        const newDetails = [...details, { contactDetails }];
        setDetails(newDetails)
        e.preventDefault();
    }
    const removeItem = (Detailindex) => {
        const newDetails = details.filter((_, index) => index !== Detailindex);

        setDetails(newDetails);
    }
    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "30%", borderRight: "1px solid #ccc" }}>
                <h1>Friends</h1>
                {details.length > 0 ? details.map((a, index) => {
                    return (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <p >{a.contactDetails.firstName}</p>
                            <DeleteIcon onClick={() => removeItem(index)} />
                        </div>
                    )
                }) : "No Friends, Please add"}
            </div>
            <div style={{ marginLeft: "30px" }}>
                <div >
                    <TextField style={{ margin: "0px 20px" }} id="standard-basic" label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />


                    <TextField style={{ margin: "0px 20px" }} id="standard-basic" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div >
                    <FormControl component="fieldset" style={{ marginRight: "89px" }}>
                        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
                            <FormLabel style={{ textAlign: "left" }} component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={status} onChange={onHandleChange}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </div>
                        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
                            <FormLabel style={{ textAlign: "left" }} component="legend">Martial Status</FormLabel>
                            <RadioGroup aria-label="status" name="status" value={value} onChange={statusHandleChange}>
                                <FormControlLabel value="married" control={<Radio />} label="Married" />
                                <FormControlLabel value="unmarried" control={<Radio />} label="Un Married" />
                            </RadioGroup>
                        </div>

                        <div style={{ display: "flex", marginBottom: "20px", marginLeft: "20px" }}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={number}
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Phone number</MenuItem>
                                <MenuItem value={2}>Mobile number</MenuItem>
                            </Select>
                            <TextField style={{ margin: "0px 20px" }} id="standard-basic" label="Number" value={displayNumber} onChange={(e) => setDisplayNumber(e.target.value)} />

                        </div>

                    </FormControl>
                </div>


                <Button type="submit" value="Submit" variant="contained" onClick={handleSubmit}>Create</Button>
            </div>
        </div>

    )
}