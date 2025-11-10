"use client";
import { AppBar, Box, Button, Container, MenuItem, Popover, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import "./heder.css";
import ModalCustom from "./modal";


export default function HeaderFull() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const symbols = [
    {
      id: "emblem",
      img: "https://www.maorif.tj/img/gerbtjk.png",
      text: "Нишон",
      description: "Нишони давлатии Ҷумҳурии Тоҷикистон...",
    },
    {
      id: "flag",
      img: "https://www.maorif.tj/img/flagtjk.png",
      text: "Парчам",
      description: "Парчами давлатии Ҷумҳурии Тоҷикистон...",
    },
  ];

  const menuItems = [
    { id: "home", label: "Асосӣ" },
    {
      id: "achievements",
      label: "Ифтихорот",
      submenu: [
        { label: "Ҷоизаҳо", path: "/achievements/joizaho" },
        { label: "Дипломҳо", path: "/achievements/diplomho" },
        { label: "Медалҳо", path: "/achievements/medalho" },
      ],
    },
    {
      id: "teachers",
      label: "Омӯзгорон",
      submenu: [
        { label: "Муаллимони фаннӣ", path: "/teachers/fan" },
        { label: "Роҳбарият", path: "/teachers/rohbariyat" },
        { label: "Кормандон", path: "/teachers/kormandon" },
      ],
    },
    {
      id: "contact",
      label: "Матбуот",
      submenu: [
        { label: "Хабарҳо", path: "/contact/khabarho" },
        { label: "Эълонҳо", path: "/contact/eolonho" },
        { label: "Вокунишҳо", path: "/contact/vokunishho" },
        { label: "Тамос", path: "/contact/tamos" },
      ],
    },
  ];

  const handleMouseEnter = (event, id) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuId(id);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setOpenMenuId(null);
  };

  return (
    <>
      {/* Header 1 */}
      <AppBar position="static" sx={{ bgcolor: "#f9fafb", color: "black", boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Рамзҳо */}
            <Box sx={{ display: "flex", gap: 3, paddingLeft: 3, alignItems: "center" }}>
              {symbols.map((symbol) => (
                <Box
                  key={symbol.id}
                  onClick={() => setActiveModal(symbol.id)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    p: 1,
                    borderRadius: 1,
                    "&:hover": { bgcolor: "grey.100" },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  <img src={symbol.img} alt={symbol.text} style={{ width: 30, height: 25 }} />
                  <Typography fontWeight={600} fontSize={14}>
                    {symbol.text}
                  </Typography>
                </Box>
              ))}

              {symbols.map((symbol) => (
                <ModalCustom
                  key={symbol.id}
                  isOpen={activeModal === symbol.id}
                  onClose={() => setActiveModal(null)}
                  img={symbol.img}
                  text={symbol.text}
                  description={symbol.description}
                />
              ))}
            </Box>

            {/* Телефон ва шабакаҳо */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src="https://www.freeiconspng.com/uploads/tel-phone-icon-5.png"
                  alt="Phone"
                  style={{ width: 18, height: 18, filter: "invert(30%)" }}
                />
                <a href="tel:+992372244170" className="text-gray-800 font-medium hover:text-blue-700 transition">
                  +992 372 24 41 70
                </a>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                {["telegram", "youtube", "instagram", "facebook"].map((social) => (
                  <img
                    key={social}
                    src={`https://www.maorif.tj/img/svg/${social}.svg`}
                    alt={social}
                    style={{
                      width: 35,
                      height: 35,
                      cursor: "pointer",
                      opacity: 0.8,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                  />
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Header 2 */}
      {!activeModal && (
        <AppBar
          position="sticky"
          sx={{
            background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            zIndex: 1200,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              {/* Logo */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  background: "linear-gradient(to right, #fff, #fde68a)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                МТМУ №10
              </Typography>

              {/* Меню */}
              <Box sx={{ display: "flex", gap: 1 }}>
                {menuItems.map((item) => (
                  <Box
                    key={item.id}
                    onMouseEnter={(e) => item.submenu && handleMouseEnter(e, item.id)}
                    onMouseLeave={handleMouseLeave}
                    sx={{ position: "relative" }}
                  >
                    <Button
                      sx={{
                        color: "white",
                        fontWeight: 400,
                        fontSize: "14px",
                        px: 3,
                        "&:hover": {
                          color: "#fbbf24",
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                        transition: "all 0.25s ease-in-out",
                      }}
                    >
                      {item.label}
                    </Button>

                    {item.submenu && (
                      <Popover
                        open={openMenuId === item.id}
                        anchorEl={anchorEl}
                        onClose={handleMouseLeave}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        sx={{
                          "& .MuiPopover-paper": {
                            width: "100vw",
                            left: "0 !important",
                            right: "0 !important",
                            borderTop: "3px solid #f59e0b",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            animation: "fadeIn 0.25s ease-out",
                          },
                        }}
                        PaperProps={{
                          sx: {
                            backgroundColor: "#fff",
                            py: 2,
                          },
                        }}
                      >
                        <Container maxWidth="xl">
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Typography
                              variant="h5"
                              sx={{
                                fontWeight: "bold",
                                color: "#1e40af",
                                mb: 2,
                              }}
                            >
                              {item.label}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 4,
                                flexWrap: "wrap",
                                width: "100%",
                              }}
                            >
                              {item.submenu.map((sub, index) => (
                                <MenuItem
                                  key={index}
                                  sx={{
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    color: "#6b7280",
                                    px: 3,
                                    py: 1.5,
                                    "&:hover": {
                                      color: "#1e40af",
                                      backgroundColor: "#fef3c7",
                                      borderRadius: 2,
                                      transform: "translateY(-2px)",
                                    },
                                    transition: "all 0.25s ease",
                                  }}
                                >
                                  {sub.label} {/* ИСЛОҲ: sub.label */}
                                </MenuItem>
                              ))}
                            </Box>
                          </Box>
                        </Container>
                      </Popover>
                    )}
                  </Box>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}
