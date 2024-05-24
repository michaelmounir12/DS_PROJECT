import PetsIcon from "@mui/icons-material/Pets";
import ElderlyIcon from '@mui/icons-material/Elderly';
import PeopleIcon from '@mui/icons-material/People';
import HealingIcon from '@mui/icons-material/Healing';
export default function VolunterSection() {
  return (
    <>
      <div style={{marginBottom:'60px'}}>
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "bold",
              backgroundColor: "blueviolet",
              textAlign: "center",
            }}
          >
            VolunteerMatch
          </h1>
        </div>
        <h1>Find The Best Volunteer Opportunities Near You</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginTop:'30px'
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor:'pointer'
            }}
          >
            <PetsIcon style={{ fontSize: 30 }} />
            Animal Care
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor:'pointer'
            }}
          >
            <ElderlyIcon style={{ fontSize: 30 }} />
           Elders Care
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor:'pointer'
            }}
          >
            <HealingIcon style={{ fontSize: 30 }} />
            Health & medicine
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor:'pointer'
            }}
          >
            <PeopleIcon style={{ fontSize: 30 }} />
           Community
          </div>
         
        </div>
      </div>
    </>
  );
}
