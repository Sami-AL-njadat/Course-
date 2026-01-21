export default function Img() {
    return (
        <>
        <div

            style={{
                margin: "20px 0 0 100px",
                color: "black",
                background: "#ffffffff",
                textAlign: "center",            
                height: "auto",
                width: "80%",
                padding: "40px",    
                border: "5px solid #13c7a3ff",
            }}>
            <h2
                style={{
                    borderBottom: "1px solid #000000",
                }}
            >Image Component</h2>



                <img
                style={{
                        height: "auto   ",
                width: "80%",
                }}
                src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_2999,h_1687/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nabd3lsoifdkrmfifqrn/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-Klook.jpg" alt="Placeholder Image" />
        </div>
            </>
    );
}