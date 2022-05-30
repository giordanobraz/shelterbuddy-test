import { Grid } from "@mui/material";
import { Header } from "./components/Header/Header";
import { AnimalsListPage } from "./pages/AnimalsListPage";

function App() {
  return (
    <Grid sx={{ py: 10 }}>
      <Header />
      <AnimalsListPage />
    </Grid>
  );
}

export default App;
