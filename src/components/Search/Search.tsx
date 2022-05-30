import {
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  outlinedInputClasses,
  styled,
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const CustomOutlinedInput = styled(OutlinedInput)<OutlinedInputProps>({
  backgroundColor: "#F4F4F7",
  borderRadius: 12,
  border: 0,

  [`& .${outlinedInputClasses.input}`]: {
    padding: "12px 0",
    color: "#a1a2af",
    fontSize: 14,
  },
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    border: 0,
  },
});

export function Search({ searchValue, setSearchValue }: SearchProps) {
  return (
    <CustomOutlinedInput
      fullWidth
      placeholder="Search an animal by name"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchOutlinedIcon />
        </InputAdornment>
      }
    />
  );
}
