import { Schema, model, models } from "mongoose";

const HeadSchema = new Schema(
  {
    sHeading: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LandHeadModel = models.header || model("header", HeadSchema);

export default LandHeadModel;
