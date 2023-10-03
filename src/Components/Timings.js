import { Chip, Avatar, Typography } from "@material-tailwind/react";

export default function Timings() {
  return (
    <Chip
      value={
        <Typography
          style={{
            color: "black",
            fontSize: "17px",
            fontWeight: "650",
            marginLeft: "30px",
            textAlign: "center",
          }}
          variant="small"
          color="white"
          className=" capitalize leading-none"
        >
          Timings : Morning 9.30am - Evening 6:00pm (IST) || Monday to Sunday
          (Wednesday OFF)
        </Typography>
      }
      className="rounded-full py-1.5 chipc"
    />
  );
}
