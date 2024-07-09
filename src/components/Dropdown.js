import React, { useState, useRef } from 'react'
import { Box, MenuItem, MenuList, Popper, Paper, Grow, ButtonGroup, Button, ClickAwayListener } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { GetPageFormat, GetPageSize } from '../features/dashboard/dashboardSlice';
import { useDispatch } from 'react-redux';


const Dropdown = ({ options }) => {

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        console.log(options[selectedIndex])
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    //---Redux---//
    const dispatch = useDispatch()
    if (options[selectedIndex].length === 3) {
        dispatch(GetPageFormat(options[selectedIndex]))
    } else {
        dispatch(GetPageSize(options[selectedIndex]))
    }
    //---Redux---//

    return (
        <>
            <Box>
                <ButtonGroup
                    sx={{
                        width: '100%'
                    }}
                    variant="outlined"
                    ref={anchorRef}
                    aria-label="Button group with a nested menu"
                >
                    <Button
                        onClick={handleClick}
                        sx={{ width: '100%' }}

                    >{options[selectedIndex]}</Button>
                    <Button
                        size="large"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper
                    sx={{
                        zIndex: 1,
                        width: '28%'
                    }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" autoFocusItem >
                                        {options.map((option, index) => (
                                            <MenuItem
                                                sx={{ justifyContent: 'center' }}
                                                key={option}
                                                // disabled={index === 2}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Box>
        </>
    );
}

export default Dropdown