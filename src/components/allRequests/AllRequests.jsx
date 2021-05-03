/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllRequest, deleteRequest } from "../../actions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import GridComponent from "../GridComponent/GridComponent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  btn: {
    margin: "0 0px 5px 5px",
    marginTop: theme.spacing(1),
    padding: "0px",
    fontSize: "10px",
  },
  btnbox: {
    display: "flex",
    flexDirection: "row",
  },
  AddBtn: {
    marginTop: theme.spacing(2),
    "&:hover": {
      color: "white",
    },
  },
}));

const Requests = (props) => {
  useEffect(() => {
    props.getAllRequest();
  }, []);
  const classes = useStyles();
  const handleDelete = (id) => {
    props.deleteRequest(id);
  };

  return (
    <GridComponent>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="right">Имя</TableCell>
              <TableCell align="right">Телефон</TableCell>
              <TableCell align="right">Емаил</TableCell>
              <TableCell align="right">Компания</TableCell>
              <TableCell align="right">Дата</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.allData.allUserRequests.map((row, key) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {++key}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <div className={classes.btnbox}>
                  <Button
                    className={classes.btn}
                    onClick={() => handleDelete(row._id)}
                    variant="outlined"
                    color="secondary"
                  >
                    Удалить
                  </Button>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GridComponent>
  );
};
const mapStateToProps = (state) => {
  return { allData: state.userRequest };
};
export default connect(mapStateToProps, {
  getAllRequest,
  deleteRequest,
})(Requests);
