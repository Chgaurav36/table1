import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles({
  topBar: {
    backgroundColor: "#ffcc00",
    padding: "5px 20px",
  },
  topBarText: {
    fontSize: "0.9rem",
  },
  contactIcon: {
    marginRight: "5px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  appBar: {
    backgroundColor: "#333399",
    padding: "10px 20px",
  },
  menuItem: {
    color: "#fff !important",
    marginRight: "20px",
    "&:hover": {
      color: "#ffcc00",
    },
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },
  dropdownMenu: {
    "& .MuiPaper-root": {
      backgroundColor: "#f1f1f1",
      color: "#000",
    },
  },
  drawerPaper: {
    width: 250,
  },
  drawerListItem: {
    "&:hover": {
      color: "#ffcc00",
    },
  },
  nested: {
    paddingLeft: "20px",
  },
});

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:1100px)");

  // Dropdown menu state handlers
  const [aboutUsAnchorEl, setAboutUsAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [consultingAnchorEl, setConsultingAnchorEl] = useState(null);
  const [industryAnchorEl, setIndustryAnchorEl] = useState(null);
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState(null);
  const [lifeHGAnchorEl, setLifeHGAnchorEl] = useState(null);

  // Drawer (mobile menu) state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openConsulting, setOpenConsulting] = useState(false);
  const [openIndustry, setOpenIndustry] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openLifeHG, setOpenLifeHG] = useState(false);

  // Functions to handle menu open and close for each item
  const handleMenuOpen = (setAnchorEl) => (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleMobileDropdown = (setOpen) => () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const renderMenuItems = () => (
    <>
      {/* About Us Dropdown */}
      <Button
        className={classes.menuItem}
        onClick={handleMenuOpen(setAboutUsAnchorEl)}
      >
        About Us <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={aboutUsAnchorEl}
        open={Boolean(aboutUsAnchorEl)}
        onClose={handleMenuClose(setAboutUsAnchorEl)}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={handleMenuClose(setAboutUsAnchorEl)}>
          Company
        </MenuItem>
        <MenuItem onClick={handleMenuClose(setAboutUsAnchorEl)}>Team</MenuItem>
        <MenuItem onClick={handleMenuClose(setAboutUsAnchorEl)}>
          Careers
        </MenuItem>
      </Menu>

      {/* Services Dropdown */}
      <Button
        className={classes.menuItem}
        onClick={handleMenuOpen(setServicesAnchorEl)}
      >
        Services <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={servicesAnchorEl}
        open={Boolean(servicesAnchorEl)}
        onClose={handleMenuClose(setServicesAnchorEl)}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={handleMenuOpen(setConsultingAnchorEl)}>
          Consulting <ArrowDropDownIcon />
        </MenuItem>
        <Menu
          anchorEl={consultingAnchorEl}
          open={Boolean(consultingAnchorEl)}
          onClose={handleMenuClose(setConsultingAnchorEl)}
          className={classes.dropdownMenu}
        >
          <MenuItem onClick={handleMenuClose(setConsultingAnchorEl)}>
            Strategy
          </MenuItem>
          <MenuItem onClick={handleMenuClose(setConsultingAnchorEl)}>
            Operations
          </MenuItem>
          <MenuItem onClick={handleMenuClose(setConsultingAnchorEl)}>
            Technology
          </MenuItem>
        </Menu>
        <MenuItem onClick={handleMenuClose(setServicesAnchorEl)}>
          Recruitment
        </MenuItem>
        <MenuItem onClick={handleMenuClose(setServicesAnchorEl)}>
          Outsourcing
        </MenuItem>
      </Menu>

      {/* Industry Verticals Dropdown */}
      <Button
        className={classes.menuItem}
        onClick={handleMenuOpen(setIndustryAnchorEl)}
      >
        Industry Verticals <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={industryAnchorEl}
        open={Boolean(industryAnchorEl)}
        onClose={handleMenuClose(setIndustryAnchorEl)}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={handleMenuClose(setIndustryAnchorEl)}>
          Finance
        </MenuItem>
        <MenuItem onClick={handleMenuClose(setIndustryAnchorEl)}>
          Technology
        </MenuItem>
        <MenuItem onClick={handleMenuClose(setIndustryAnchorEl)}>
          Healthcare
        </MenuItem>
      </Menu>

      {/* Resources Dropdown */}
      <Button
        className={classes.menuItem}
        onClick={handleMenuOpen(setResourcesAnchorEl)}
      >
        Resources <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={resourcesAnchorEl}
        open={Boolean(resourcesAnchorEl)}
        onClose={handleMenuClose(setResourcesAnchorEl)}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={handleMenuClose(setResourcesAnchorEl)}>
          Blog
        </MenuItem>
        <MenuItem onClick={handleMenuClose(setResourcesAnchorEl)}>
          Guides
        </MenuItem>
        <MenuItem onClick={handleMenuClose(setResourcesAnchorEl)}>
          Case Studies
        </MenuItem>
      </Menu>

      {/* Life@HG Dropdown */}
      <Button
        className={classes.menuItem}
        onClick={handleMenuOpen(setLifeHGAnchorEl)}
      >
        Life@HG <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={lifeHGAnchorEl}
        open={Boolean(lifeHGAnchorEl)}
        onClose={handleMenuClose(setLifeHGAnchorEl)}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={handleMenuClose(setLifeHGAnchorEl)}>
          Culture
        </MenuItem>
        <MenuItem onClick={handleMenuClose(setLifeHGAnchorEl)}>Events</MenuItem>
        <MenuItem onClick={handleMenuClose(setLifeHGAnchorEl)}>Teams</MenuItem>
      </Menu>
    </>
  );

  return (
    <div>
      {/* Top Bar with Contact and Social Media Icons */}
      <Box className={classes.topBar}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Grid container alignItems="center">
              <PhoneIcon className={classes.contactIcon} />
              <Typography className={classes.topBarText}>
                (+91) 9930-1000-22 / 33
              </Typography>
              <MailIcon
                className={classes.contactIcon}
                style={{ marginLeft: "15px" }}
              />
              <Typography className={classes.topBarText}>
                connect@hireglocal.com
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container justifyContent="flex-end">
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Main Navbar */}
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            Hire Glocal
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                classes={{ paper: classes.drawerPaper }}
              >
                <List>
                  {/* Mobile dropdown for About Us */}
                  <ListItem
                    button
                    onClick={toggleMobileDropdown(setOpenAboutUs)}
                  >
                    <ListItemText primary="About Us" />
                    {openAboutUs ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={openAboutUs} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Company" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Team" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Careers" />
                      </ListItem>
                    </List>
                  </Collapse>

                  {/* Mobile dropdown for Services */}
                  <ListItem
                    button
                    onClick={toggleMobileDropdown(setOpenServices)}
                    // onMouseEnter={() => setOpenServices(true)}
                    // onMouseLeave={() => setOpenServices(false)}
                  >
                    <ListItemText primary="Services" />
                    {openServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={openServices} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Consulting" />
                        {openConsulting ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </ListItem>
                      <Collapse
                        in={openConsulting}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <ListItem button className={classes.nested}>
                            <ListItemText primary="Strategy" />
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemText primary="Operations" />
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemText primary="Technology" />
                          </ListItem>
                        </List>
                      </Collapse>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Recruitment" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Outsourcing" />
                      </ListItem>
                    </List>
                  </Collapse>

                  {/* Mobile dropdown for Industry Verticals */}
                  <ListItem
                    button
                    onClick={toggleMobileDropdown(setOpenIndustry)}
                  >
                    <ListItemText primary="Industry Verticals" />
                    {openIndustry ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={openIndustry} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Finance" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Technology" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Healthcare" />
                      </ListItem>
                    </List>
                  </Collapse>

                  {/* Mobile dropdown for Resources */}
                  <ListItem
                    button
                    onClick={toggleMobileDropdown(setOpenResources)}
                  >
                    <ListItemText primary="Resources" />
                    {openResources ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={openResources} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Blog" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Guides" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Case Studies" />
                      </ListItem>
                    </List>
                  </Collapse>

                  {/* Mobile dropdown for Life@HG */}
                  <ListItem
                    button
                    onClick={toggleMobileDropdown(setOpenLifeHG)}
                  >
                    <ListItemText primary="Life@HG" />
                    {openLifeHG ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={openLifeHG} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Culture" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Events" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Teams" />
                      </ListItem>
                    </List>
                  </Collapse>

                  {/* Contact Us */}
                  <ListItem button>
                    <ListItemText primary="Contact Us" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Grid container justifyContent="flex-end">
              <Button className={classes.menuItem}>Home</Button>
              {renderMenuItems()}
              <Button className={classes.menuItem}>Contact Us</Button>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
