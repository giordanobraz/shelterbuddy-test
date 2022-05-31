import { IconButton, IconButtonProps, styled } from "@mui/material";

const CustomButton = styled(IconButton)<IconButtonProps>({
  width: "40px",
  height: "40px",
  margin: "4px",
  fontSize: 16,
  fontWeight: 600,
  borderRadius: "50%",
  backgroundColor: "#E0E7FD",
  color: "#002fd6",
  [`&:disabled`]: {
    backgroundColor: "#002fd6",
    color: "white",
  },
});

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  number,
  isCurrent,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return <CustomButton disabled>{number + 1}</CustomButton>;
  }

  return (
    <CustomButton onClick={() => onPageChange(number)}>
      {number + 1}
    </CustomButton>
  );
}
