import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Button,
  Pagination,
  PaginationItem,
  Box,
} from "@mui/material";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/medlist/all?page=${page}&limit=${limit}`
        );
        const newMedicines = response.data;
        setMedicines((prevMedicines) => [...prevMedicines, ...newMedicines]);
        setLoading(false);
        if (newMedicines.length < limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching medicines:", error);
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [hasMore, limit, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container sx={{ mt: 4, mr: 6 }}>
      <Typography
        variant="h4"
        align="center"
        fontFamily="'Nunito', sans-serif"
        gutterBottom
        color={"#23386f"}
        sx={{ mb: 2 }}
      >
        Medicine List
      </Typography>
      <Divider
        sx={{
          margin: "12px 0",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <TableContainer
        component={Paper}
        elevation={10}
        sx={{ borderRadius: 8, overflow: "hidden" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((medicine, index) => (
              <TableRow key={medicine._id}>
                <TableCell>{medicine.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={10}
          page={page}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              component={Button}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Box>
      {loading && (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}

export default App;
