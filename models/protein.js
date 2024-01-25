const { model, Schema } = require("mongoose");

const proteinSchema = new Schema(
  {
    proteinSource: { type: String, required: true },
    quantity: { type: Boolean, required: true },
    isOrganic: { type: Boolean, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Protein = model("Protein", proteinSchema);

module.exports = Protein;
