import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

function LandingPage() {
    return(
        <div >
            <nav style={{display:"flex", justifyContent:"space-between", marginRight:'2px',marginTop:'2px',}}>
                <img src="./logo.png" style={{height:'70px', width:'450px'}}></img>
                <Typography variant={"h3"} style={{marginRight:'13%', marginTop:'10px'}}>Skill Training Program</Typography>
                <div style={{marginRight:'2px',marginTop:'1.5%'}}> 
                    <select>
                        <option value="fruit">Select Language</option>
                        <option value="fruit">English</option>
                        <option value="fruit">Gujarati</option>
                        <option value="vegetable">Hindi</option>
                        <option value="meat">Marathi</option>
                    </select>

                </div>
                <Typography variant={"h5"} style={{marginRight:'2%', marginTop:'15px'}}>Lokesh</Typography>
            </nav>
            <div style={{backgroundColor:'black',display:'flex'}}>  
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={{ backgroundColor:'black', color:'white', padding:'5px', marginTop:'9%'}}>
                    <Typography variant={"h2"} style={{marginLeft:'80px'}}>Blockchain Developer Guide</Typography>
                    <br />
                    <Typography variant={"h6"} style={{marginLeft:'80px'}}>Learn fundamentals of Blockchain development and how to become a </Typography>
                    <Typography variant={"h6"} style={{marginLeft:'80px'}}>Blockchain developer </Typography>
                    < br />
                    <Typography variant={"h6"} style={{marginLeft:'80px'}}>5.0  (12 ratings) 1.7k students enrolled</Typography>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <div style={{marginLeft:'10%', marginTop:'9%' }} >
                    <img src="./blo.png" style={{border: '5px solid white', height:'350px', width:'470px'}} ></img>
                    <br />
                    <br />
                    <Button variant={"contained"} >Course Completed </Button>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
        
    )

}

export default LandingPage;