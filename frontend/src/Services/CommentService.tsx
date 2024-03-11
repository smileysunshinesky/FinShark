import axios from "axios";
import { CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";
import { CommentGet } from "../Models/CommentGet";

const api = "http://localhost:5275/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const commentGetAPI = async ( symbol: string ) => {
  try {
    const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
