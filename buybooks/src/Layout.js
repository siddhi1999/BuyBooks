import {useState} from 'react';
import TextField from '@mui/material/TextField';
import List from './List';
import Search from './Search';

const Layout = (props) => {
    const [searchVal, setSearchVal] = useState('');

    return (
        <div>
            <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined"
            value={searchVal}
            onChange= {(event) => setSearchVal(event.target.value)} />

            {searchVal ? <Search searchValue= {searchVal}/> : <List />}
        </div>
    );
};

export default Layout;

