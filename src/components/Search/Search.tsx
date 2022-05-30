import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment, TextField } from "@mui/material";

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export function Search({ searchValue, setSearchValue }: SearchProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label="Search an animal by name"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
