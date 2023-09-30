import { Chip, Avatar, Typography } from "@material-tailwind/react";

export default function Timings() {
  return (
    <Chip
      icon={
        <span
          style={{ color: "black", marginTop: "-10px", marginLeft: "7px" }}
          class="material-symbols-outlined"
        >
          schedule
        </span>
      }
      value={
        <Typography
          style={{
            color: "black",
            fontSize: "17px",
            fontWeight: "600",
            marginLeft: "30px",
          }}
          variant="small"
          color="white"
          className=" capitalize leading-none"
        >
          Timings : Mor 9.30am - Eve 6pm (IST)
        </Typography>
      }
      className="rounded-full py-1.5 chipc"
    />
  );
}
