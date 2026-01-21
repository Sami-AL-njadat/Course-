    import Container from "@mui/material/Container";
    import Box from '@mui/material/Box';
    import NameTask from "./NameTask";

    export default function New() {
        let tasks = [];
        try {
            const data = localStorage.getItem('tasks');
            if (data) {
                tasks = JSON.parse(data);
                if (!Array.isArray(tasks)) tasks = [];
            }
        } catch {
            tasks = [];
        }

        
        return (
        <>
        

        <Container maxWidth="sm">
        
            <Box sx={{ bgcolor: '#cfe8fc', height: 'auto',direction:"rtl", padding:"20px", borderRadius:"8px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                
                <h1 style={{textAlign:"center", fontFamily:"Arial", color:"#333",fontWeight:"bold",borderBottom:"2px solid #333", paddingBottom:"10px", marginBottom:"20px"}}>
                    مهامي
                </h1>


                        <h3>Tasks from Local Storage:</h3>
                        {tasks.length === 0 ? (
                            <p>No tasks found.</p>
                        ) : (
                            <ul>
                                {tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                          </ul>
                        )}

                <NameTask />

                </Box> 
        </Container>

    </>
        )  
    };