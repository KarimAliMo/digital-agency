"use server";

import LandHeadModel from "@/models/LandHeadModel";
import connectDB from "@/config/database";

export async function getHeaders() {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await LandHeadModel.find()));
    return { data };
  } catch (error) {
    return { errMsg: error.message };
  }
}
