import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockIcon from "@mui/icons-material/Lock";
import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
        <DialogTitle className='font-["var[--font-poppins]"] text-sm'>
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
            <div className="flex w-[100%] gap-4">
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
                className="ml-2 bg-pl-RoyalBlue text-white"
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </div>

            {/* container untuk bagian hasil search */}
            <div className="mt-4 flex w-[100%] gap-3">
              {/* bagian filter */}
              <div className="h-fit w-[33%]">
                <div className="w-[100%] rounded-md border-2 bg-white p-3 shadow-md">
                  <h3 className="mb-2">Filter</h3>

                  {/* horizontal line */}
                  <div className="w-100% mb-2 mt-2 h-[2px] bg-gray-200"></div>
                  {/* horizontal line */}
                  <div className="text-sm">
                    <div className="mb-2 flex justify-between">
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
                    <div className="w-100% mb-2 mt-2 h-[2px] bg-gray-200"></div>
                    {/* horizontal line */}
                  </div>
                  <div className="text-sm">
                    <div className="mb-2 flex justify-between">
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
                    <div className="w-100% mb-2 mt-2 h-[2px] bg-gray-200"></div>
                    {/* horizontal line */}
                  </div>
                </div>
              </div>
              {/* bagian modul hasil dari pencarian */}
              <div className="h-fit w-[67%]">
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(5)].map((_, index) => (
                    <div
                      className="rounded-md border-2 bg-white p-3 shadow-md"
                      key={index}
                    >
                      <div className="flex justify-between">
                        <h3 className="text-sm">Modul</h3>
                        <LockIcon sx={{ color: "#127CA6" }} />
                      </div>
                      <h1 className="font-semibold">Pancasila</h1>
                      <div className="w-[100%] rounded-md bg-[#F5FCFF] p-2">
                        <div className="flex items-center text-sm">
                          <ArticleIcon fontSize="small" sx={{ padding: "0" }} />
                          <h3 className="ml-1 inline ">5 Bab Materi</h3>
                        </div>

                        <div className="mt-2 h-fit w-fit rounded-md bg-[#D1E4FD] px-1">
                          tidak terkunci
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 text-sm">
                        <div className="mt-1 h-fit w-fit rounded-md bg-[#1268A6] px-1">
                          Kewarganegaraan
                        </div>
                        <div className="mt-1 h-fit w-fit rounded-md bg-[#1268A6] px-1">
                          PKN
                        </div>
                      </div>

                      {/* horizontal line */}
                      <div className="w-100% mb-2 mt-2 h-[2px] bg-gray-200"></div>
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
                        className="mt-2 w-[100%] bg-[#127CA6] text-sm text-white"
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
              className="mx-auto mt-7 h-[60px] w-[80px] lg:h-28 lg:w-28 xl:h-80 xl:w-80 "
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
