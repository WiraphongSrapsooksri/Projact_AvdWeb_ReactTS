import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import Slider from "react-slick";
import { ListChildComponentProps } from "react-window";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../index.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    point: 1054,
    name: "Leanne Graham",
    time: "10:30",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    point: 1445,
    name: "Ervin Howell",
    time: "15:00",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    point: 1056,
    name: "Clementine Bauch",
    time: "20:40",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    point: 1094,
    name: "Patricia Lebsack",
    time: "07:50",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    point: 13456,
    name: "Mrs. Dennis Schulist",
    time: "00:30",
  },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// interface element {
//   img: string;
//   title: string;
//   point: number;
//   name: string;
//   time: string;
// }

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

const NextArrow = () => <div></div>;
const PrevArrow = () => <div></div>;

export default function MainPage() {
  return (
    <>
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={8} sx={{ backgroundColor: "#ECECEC" }}>
              <Item sx={{ backgroundColor: "#F8F8F8" }}>
                <h2 style={{ fontFamily: "BlackOpsOne", fontSize: "30px" }}>
                  Rating
                </h2>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    overflowX: "auto",
                    overflowY: "hidden",
                  }}
                >
                  <Slider
                    dots
                    infinite
                    speed={1000}
                    slidesToShow={2}
                    slidesToScroll={1}
                    variableWidth
                    autoplay
                    autoplaySpeed={4000}
                    swipeToSlide
                    easing="easeInOutQuart"
                  >
                    {itemData
                      .sort((a, b) => b.point - a.point)
                      .map((_element, index) => (
                        <div key={index}>
                          {renderCard({
                            index,
                            style: { padding: "0 8px" },
                            data: undefined,
                          })}
                        </div>
                      ))}
                  </Slider>

                  {/* {itemData
                    .sort((a, b) => b.point - a.point)
                    .map((element, index) => renderCard(element, index))} */}
                </div>
              </Item>
            </Grid>
            <Grid xs={4} sx={{ backgroundColor: "#ECECEC" }}>
              <Item sx={{ height: "68%" }}>
                <h2 style={{ fontFamily: "BlackOpsOne", fontSize: "30px" }}>
                  Uploaded images
                </h2>
                <div style={{}}>
                  <Slider
                    dots
                    infinite
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    variableWidth
                    autoplay
                    autoplaySpeed={4000}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    // sx={{
                    //   overflow: "hidden",
                    //   position: "relative",
                    // }}
                  >
                    {itemData.map((_item, index) => (
                      <div key={index}>
                        {renderImageRow({
                          index,
                          style: { padding: "0 8px" },
                          data: undefined,
                        })}
                      </div>
                    ))}
                  </Slider>
                </div>
              </Item>
              <br />
              <Item sx={{ height: "19%" }}>
                <div>
                  <p style={{ fontFamily: "BlackOpsOne", fontSize: "20px" ,marginTop:0}}>
                    Total score
                  </p>
                  <p style={{ fontFamily: "BlackOpsOne", fontSize: "40px" ,marginTop:-15}}>
                    {itemData
                      .reduce((sum, item) => sum + item.point, 0)
                      .toLocaleString()}
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                <h1>vote</h1>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                <h1>Profile</h1>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

function renderImageRow(props: ListChildComponentProps) {
  const { index, style } = props;
  const item = itemData[index];

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <Card
          variant="plain"
          sx={{
            width: 300,
            bgcolor: "initial",
            p: 0,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src={item.img}
                  srcSet={item.img}					
                  loading="lazy"
                  alt="Yosemite by Casey Horner"
                />
              </figure>
            </AspectRatio>
            <CardCover
              className="gradient-cover"
              sx={{
                "&:hover, &:focus-within": {
                  opacity: 1,
                },
                opacity: 0,
                transition: "0.1s ease-in",
                background:
                  "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
              }}
            >
              {/* The first box acts as a container that inherits style from the CardCover */}
              <div>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    flexGrow: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                    <Link
                      href="#"
                      overlay
                      underline="none"
                      sx={{
                        color: "#fff",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "block",
                      }}
                    >
                      {item.title}
                    </Link>
                  </Typography>

                  {/* <IconButton
                    variant="solid"
                    color="neutral"
                    sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                  >
                    <VisuallyHiddenInput type="file" />
                    <ChangeCircleIcon />
                  </IconButton> */}

                  <Button
                    component="label"
                    size="small"
                    sx={{
                      ml: "auto",
                      bgcolor: "rgba(0 0 0 / 0.2)",
                      display: "flex",
                      alignItems: "center", // Center vertically
                      justifyContent: "center", // Center horizontally
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    <ChangeCircleIcon />
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Box>
              </div>
            </CardCover>
          </Box>
        </Card>
      </ListItemButton>
    </ListItem>
  );
}
