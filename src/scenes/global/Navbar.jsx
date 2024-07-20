import {useDispatch, useSelector} from 'react-redux'
import {badge,Box,IconButton} from '@mui/material'
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined
}from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { shades } from '../../Theme'
const Narbar =()=> {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    return <Box display="flex"
    alignItems="center"
    width="100%"
    height="60px"
    backgroundColor="rgba(255,255,255,0.95)"
    color="black"
    position="fixed"
    top="0"
    left="0"
    zIndex="1"
    >
        <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center">
            <Box onclick={()=> navigate("/")}
                sx={{'&hover':{cursor:"pointer"}}}
                color={shades.secondary[500]}></Box>
                <Box
                display="flex"
                justifyContent="space-between"
                columnGap="20px"
                zIndex="2">
                    <IconButton>
                        <SearchOutlined sx={{color:'Black'}}></SearchOutlined>
                    </IconButton>
                    <IconButton>
                        <PersonOutlined sx={{color:'Black'}}></PersonOutlined>
                    </IconButton>
                    <IconButton>
                        <ShopingBagOutlined sx={{color:'Black'}}></ShopingBagOutlined>
                    </IconButton>
                    <IconButton>
                        <MenuOutlined sx={{color:'Black'}}></MenuOutlined>
                    </IconButton>
                </Box>
        </Box>
    </Box>
}
export default Narbar