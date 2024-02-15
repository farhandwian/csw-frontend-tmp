import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockIcon from "@mui/icons-material/Lock";
import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";

interface SearchModalProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const SearchModal = ({ open, handleOpen, handleClose }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checked, setChecked] = useState(true);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the search logic here
    console.log(searchTerm);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Dialog
        // fullScreen
        className='font-["var[--font-poppins]"]'
        open={open}
        onClose={handleClose}
        maxWidth="xl"
      >
        <DialogTitle className='text-sm font-["var[--font-poppins]"]'>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Searching Your Module</h1>{" "}
            <IconButton onClick={handleClose} style={{ float: "right" }}>
              <CloseIcon color="primary"></CloseIcon>
            </IconButton>
          </div>{" "}
          <h3>
            Masukkan kata kunci dari judul modul atau sub modul untuk melakukan
            pencarian
          </h3>
        </DialogTitle>

        <DialogContent>
          {/* parent container utama */}
          <div className="">
            {/* container untuk bagian search */}
            <div className="flex gap-4 w-[100%]">
              <Paper
                component="form"
                onSubmit={handleSearch}
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  minWidth: 600,
                }}
              >
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search google maps" }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Paper>
              <Button
                className="bg-pl-RoyalBlue ml-2 text-white"
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </div>

            {/* container untuk bagian hasil search */}
            <div className="flex gap-3 w-[100%] mt-4">
              {/* bagian filter */}
              <div className="w-[33%] h-fit">
                <div className="w-[100%] border-2 rounded-md bg-white shadow-md p-3">
                  <h3 className="mb-2">Filter</h3>

                  {/* horizontal line */}
                  <div className="w-100% h-[2px] bg-gray-200 mt-2 mb-2"></div>
                  {/* horizontal line */}
                  <div className="text-sm">
                    <div className="flex justify-between mb-2">
                      <h3>Status Materi</h3>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div>
                      <Checkbox
                        sx={{ display: "inline-block", padding: "0" }}
                        checked={checked}
                        onChange={handleFilter}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                      <h3 className="inline">Terkunci</h3>
                    </div>
                    <div>
                      <Checkbox
                        sx={{ display: "inline-block", padding: "0" }}
                        checked={checked}
                        onChange={handleFilter}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                      <h3 className=" inline">Tidak Terkunci </h3>
                    </div>
                    {/* horizontal line */}
                    <div className="w-100% h-[2px] bg-gray-200 mt-2 mb-2"></div>
                    {/* horizontal line */}
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between mb-2">
                      <h3>Status Materi</h3>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div>
                      <Checkbox
                        sx={{ display: "inline-block", padding: "0" }}
                        checked={checked}
                        onChange={handleFilter}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                      <h3 className="inline">Terkunci</h3>
                    </div>
                    <div>
                      <Checkbox
                        sx={{ display: "inline-block", padding: "0" }}
                        checked={checked}
                        onChange={handleFilter}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                      <h3 className=" inline">Tidak Terkunci </h3>
                    </div>
                    {/* horizontal line */}
                    <div className="w-100% h-[2px] bg-gray-200 mt-2 mb-2"></div>
                    {/* horizontal line */}
                  </div>
                </div>
              </div>
              {/* bagian modul hasil dari pencarian */}
              <div className="w-[67%] h-fit">
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(5)].map((_, index) => (
                    <div
                      className="bg-white shadow-md border-2 rounded-md p-3"
                      key={index}
                    >
                      <div className="flex justify-between">
                        <h3 className="text-sm">Modul</h3>
                        <LockIcon sx={{ color: "#127CA6" }} />
                      </div>
                      <h1 className="font-semibold">Pancasila</h1>
                      <div className="w-[100%] bg-[#F5FCFF] rounded-md p-2">
                        <div className="flex items-center text-sm">
                          <ArticleIcon fontSize="small" sx={{ padding: "0" }} />
                          <h3 className="inline ml-1 ">5 Bab Materi</h3>
                        </div>

                        <div className="bg-[#D1E4FD] px-1 rounded-md w-fit h-fit mt-2">
                          tidak terkunci
                        </div>
                      </div>
                      <div className="flex gap-1 flex-wrap text-sm">
                        <div className="bg-[#1268A6] px-1 rounded-md w-fit h-fit mt-1">
                          Kewarganegaraan
                        </div>
                        <div className="bg-[#1268A6] px-1 rounded-md w-fit h-fit mt-1">
                          PKN
                        </div>
                      </div>

                      {/* horizontal line */}
                      <div className="w-100% h-[2px] bg-gray-200 mt-2 mb-2"></div>
                      {/* horizontal line */}

                      <h3 className="text-xs">
                        {" "}
                        <AccessTimeIcon
                          fontSize="small"
                          sx={{ marginRight: "2px" }}
                        />
                        Last Updated 3 days ago
                      </h3>

                      <Button
                        className="bg-[#127CA6] text-white w-[100%] mt-2 text-sm"
                        color="primary"
                        variant="contained"
                      >
                        <h1 className="text-xs">Pilih Modul ini</h1>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* image kalo gagal */}
            <Image
              src={
                "/img/modul/materi-modul/search-warning-image-materi-modul.png"
              }
              width={300}
              height={300}
              alt="img-logo"
              className="w-[80px] h-[60px] lg:w-28 lg:h-28 xl:w-80 xl:h-80 mx-auto mt-7 "
            />
          </div>
        </DialogContent>
        <DialogActions>
          {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SearchModal;
