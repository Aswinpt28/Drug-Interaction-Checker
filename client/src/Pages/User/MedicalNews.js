import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";

const MedicalNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=medical&apiKey=ffcda70ac7fb45d2b46b2855c1caa7e6"
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div style={{ flexGrow: 1, padding: "20px" }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={10} lg={8}>
          <Typography variant="h2" gutterBottom align="center">
            Medical News
          </Typography>
          {news.map((article, index) => (
            <Card key={index} style={{ marginBottom: "20px" }}>
              <CardMedia
                component="img"
                height="200"
                image={
                  article.urlToImage || "https://via.placeholder.com/200x100"
                }
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Author: {article.author || "Unknown"}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Published:{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" paragraph>
                  {article.description}
                </Typography>
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </Link>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default MedicalNews;
