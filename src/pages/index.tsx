import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import { ListChildComponentProps } from "react-window";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled, { createGlobalStyle } from "styled-components";
import "../index.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: #f5f5f7; 
  }
`;


const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    point: 1054,
    name: "Leanne Graham",
    time: "10:30",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    point: 1445,
    name: "Ervin Howell",
    time: "15:00",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    point: 1056,
    name: "Clementine Bauch",
    time: "20:40",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    point: 1094,
    name: "Patricia Lebsack",
    time: "07:50",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 13456,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 1345,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 1345,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 1345,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 1345,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 1345,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 1345,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 1345,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },

  {
    id: 13,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 1345,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
];

const getColorbackground = (index: number) => {
  if (index + 1 === 1) {
    return "#B92CFF"; // สีทอง
  } else if (index + 1 === 2) {
    return "#FF6EE1"; // สีทองแดง
  } else if (index + 1 === 3) {
    return "#B0B0B0"; // สีเงิน
  } else {
    return "#D3D3D3"; // สีพื้นหลังทั่วไป
  }
};

const getColorFont = (index: number) => {
  if (index + 1 === 1) {
    return "#FFFFFF"; // สีทอง
  } else if (index + 1 === 2) {
    return "#FFFFFF"; // สีทองแดง
  } else if (index + 1 === 3) {
    return "#000000"; // สีเงิน
  } else {
    return "#000000"; // สีพื้นหลังทั่วไป
  }
};

function renderCard(props: ListChildComponentProps) {
  const { index } = props;
  const item = itemData[index];
  return (
    <div key={index}>
      <Box sx={{ minHeight: 350 }}>
        <div style={{ display: "flex", gap: "16px", padding: 5 }}>
          <Card
            variant="outlined"
            sx={(theme) => ({
              width: 300,
              gridColumn: "span 2",
              flexDirection: "row",
              flexWrap: "wrap",
              resize: "horizontal",
              overflow: "hidden",
              gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
              transition: "transform 0.3s, border 0.3s",
              "&:hover": {
                borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                transform: "translateY(-2px)",
              },
              "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
            })}
          >
            <AspectRatio
              variant="soft"
              sx={{
                flexGrow: 1,
                display: "contents",
                "--AspectRatio-paddingBottom":
                  "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
              }}
            >
              <img src={item.img} loading="lazy" alt="" />
            </AspectRatio>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 200,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography level="title-lg">
                    <Link
                      href="#"
                      overlay
                      underline="none"
                      sx={{
                        color: "text.primary",
                        "&.Mui-focusVisible:after": { outlineOffset: "-4px" },
                      }}
                    >
                      {item.title}
                    </Link>
                  </Typography>
                  <Typography level="body-sm" sx={{ textAlign: "start" }}>
                    {item.point}
                  </Typography>
                </div>

                <p
                  style={{
                    position: "relative",
                    alignSelf: "flex-start",
                    display: "inline-block",
                    padding: "4px",
                    borderRadius: "100%",
                    width: "20px",
                    height: "20px",
                    color: getColorFont(index),
                    backgroundColor: getColorbackground(index),
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {index + 1}
                </p>
              </Box>
              <AspectRatio
                variant="soft"
                sx={{
                  "--AspectRatio-paddingBottom":
                    "clamp(0px, (100% - 200px) * 999, 200px)",
                  pointerEvents: "none",
                }}
              >
                <img alt="" src={item.img} />
              </AspectRatio>
              <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
                <Avatar variant="soft" color="neutral">
                  {item.name.charAt(0)}
                </Avatar>
                <div>
                  <Typography level="body-xs" sx={{ textAlign: "start" }}>
                    {item.name}
                  </Typography>
                  <Typography level="body-sm" sx={{ textAlign: "start" }}>
                    {item.time}
                  </Typography>
                </div>
              </Box>
            </Box>
          </Card>
        </div>
      </Box>
    </div>
  );
}

export default function IndexPage() {
  return (
    <>
      <GlobalStyle />
      <Container fixed>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            // backgroundColor:"red"
          }}
        >
          <Grid container spacing={2}>
            <Grid xs={6} md={8}>
              <Item style={{ backgroundColor: "#f5f5f7" }}>
                <h1>Ranking</h1>
                <Container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {itemData
                    .sort((a, b) => b.point - a.point)
                    .slice(0, 2)
                    .map((_element, index) => (
                      <div key={index}>
                        {renderCard({
                          index,
                          style: { padding: "0 8px" },
                          data: undefined,
                        })}
                      </div>
                    ))}
                </Container>
                <Slider
                  dots={true}
                  infinite={false}
                  speed={500}
                  slidesToShow={3}
                  slidesToScroll={1}
                >
                  {itemData
                    .sort((a, b) => b.point - a.point)
                    .slice(2, 8)
                    .map((element, index) => (
                      <div key={index}>
                        {renderCard({
                          index: index + 2, // เพื่อให้ index เริ่มต้นที่ 2
                          style: { padding: "0 8px" },
                          data: element,
                        })}
                      </div>
                    ))}
                </Slider>
              </Item>
            </Grid>
            <Grid xs={6} md={4}>
              <Grid xs={6} md={4}>
                <Item style={{ padding: 100 }}>xs=6 md=8</Item>
              </Grid>
              <Grid xs={6} md={4} style={{ marginTop: 20 }}>
                <Item style={{ padding: 100 }}>xs=6 md=8</Item>
              </Grid>
              <Grid xs={6} md={4} style={{ marginTop: 20 }}>
                <Item style={{ padding: 100 }}>xs=6 md=4</Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
