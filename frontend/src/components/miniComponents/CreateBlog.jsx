/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateBlog = () => {
  const [category, setCategory] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [intro, setIntro] = useState("");
  const [paraOneTitle, setParaOneTitle] = useState("");
  const [paraOneImage, setParaOneImage] = useState("");
  const [paraOneDescription, setParaOneDescription] = useState("");
  const [paraTwoTitle, setParaTwoTitle] = useState("");
  const [paraTwoImage, setParaTwoImage] = useState("");
  const [paraTwoDescription, setParaTwoDescription] = useState("");
  const [paraThreeTitle, setParaThreeTitle] = useState("");
  const [paraThreeImage, setParaThreeImage] = useState("");
  const [paraThreeDescription, setParaThreeDescription] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [paraOneImagePreview, setParaOneImagePreview] = useState("");
  const [paraTwoImagePreview, setParaTwoImagePreview] = useState("");
  const [paraThreeImagePreview, setParaThreeImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState(true);

  const mainImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setMainImagePreview(reader.result);
      setMainImage(file);
    };
  };
  const paraOneImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaOneImagePreview(reader.result);
      setParaOneImage(file);
    };
  };
  const paraTwoImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaTwoImagePreview(reader.result);
      setParaTwoImage(file);
    };
  };
  const paraThreeImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaThreeImagePreview(reader.result);
      setParaThreeImage(file);
    };
  };

  const handleBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("intro", intro);
    formData.append("mainImage", mainImage);
    formData.append("category", category);
    formData.append("published", published);
    if (paraOneTitle.length > 0) {
      formData.append("paraOneTitle", paraOneTitle);
    }
    if (paraOneDescription.length > 0) {
      formData.append("paraOneDescription", paraOneDescription);
    }
    if (paraOneImage) {
      formData.append("paraOneImage", paraOneImage);
    }
    if (paraTwoTitle.length > 0) {
      formData.append("paraTwoTitle", paraTwoTitle);
    }
    if (paraTwoDescription.length > 0) {
      formData.append("paraTwoDescription", paraTwoDescription);
    }
    if (paraTwoImage) {
      formData.append("paraTwoImage", paraTwoImage);
    }
    if (paraThreeTitle.length > 0) {
      formData.append("paraThreeTitle", paraThreeTitle);
    }
    if (paraThreeDescription.length > 0) {
      formData.append("paraThreeDescription", paraThreeDescription);
    }
    if (paraThreeImage) {
      formData.append("paraThreeImage", paraThreeImage);
    }

    try {
      const { data } = await axios.post(
        "https://backendcampushub.onrender.com/api/v1/blog/post",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setTitle("");
      setIntro("");
      setCategory("");
      setMainImage("");
      setMainImagePreview("");
      setParaOneTitle("");
      setParaOneDescription("");
      setParaOneImage("");
      setParaOneImagePreview("");
      setParaTwoTitle("");
      setParaTwoDescription("");
      setParaTwoImage("");
      setParaTwoImagePreview("");
      setParaThreeTitle("");
      setParaThreeDescription("");
      setParaThreeImage("");
      setParaThreeImagePreview("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="create-blog">
      <h3>CREATE BLOG</h3>
      <div className="container">
        <form onSubmit={handleBlog}>
          <div className="category-box">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Blog Category</option>
              <option value="LostAndFound">Lost and Found</option>
              <option value="Events">Post an upcoming event</option>
              <option value="Blog">Blog</option>
              <option value="Articles">Articles</option>
              
              <option value="Others">Others</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="POST MAIN TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>MAIN IMAGE</label>
            <img
              src={mainImagePreview ? `${mainImagePreview}` : "/imgPL.webp"}
              alt="mainImg"
              className="mainImg"
            />
            <input
              type="file"
              onChange={mainImagePreviewHandler}
              style={{ border: "none" }}
            />
          </div>
          <textarea
            rows="25"
            className="intro"
            placeholder="POST INTRO..... (Must contain at least 250 characters!)"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
          <div className="sub-para">
            <input
              type="text"
              placeholder="Paragraph one title"
              value={paraOneTitle}
              onChange={(e) => setParaOneTitle(e.target.value)}
            />
            <img
              src={
                paraOneImagePreview ? `${paraOneImagePreview}` : "/imgPL.webp"
              }
              alt="subParaOneImg"
            />
            <input
              type="file"
              onChange={paraOneImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="10"
              placeholder="First Sub Paragraph Comes Here..."
              value={paraOneDescription}
              onChange={(e) => setParaOneDescription(e.target.value)}
            />
          </div>
          <div className="sub-para">
            <input
              type="text"
              placeholder="Paragraph two title"
              value={paraTwoTitle}
              onChange={(e) => setParaTwoTitle(e.target.value)}
            />
            <img
              src={
                paraTwoImagePreview ? `${paraTwoImagePreview}` : "/imgPL.webp"
              }
              alt="subParaTwoImg"
            />
            <input
              type="file"
              onChange={paraTwoImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="10"
              placeholder="Second Sub Paragraph Comes Here..."
              value={paraTwoDescription}
              onChange={(e) => setParaTwoDescription(e.target.value)}
            />
          </div>
          <div className="sub-para">
            <input
              type="text"
              placeholder="Paragraph three title"
              value={paraThreeTitle}
              onChange={(e) => setParaThreeTitle(e.target.value)}
            />
            <img
              src={
                paraThreeImagePreview
                  ? `${paraThreeImagePreview}`
                  : "/imgPL.webp"
              }
              alt="subParaThreeImg"
            />
            <input
              type="file"
              onChange={paraThreeImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="10"
              placeholder="Third Sub Paragraph Comes Here..."
              value={paraThreeDescription}
              onChange={(e) => setParaThreeDescription(e.target.value)}
            />
          </div>
          <div className="publish-box">
            <label>Want to publish it now?</label>
            <select
              value={published}
              onChange={(e) => setPublished(e.target.value === "true")}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <button className="create-btn" type="submit">
            POST BLOG
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateBlog;