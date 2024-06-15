import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    favorites: {
      type: [
        {
          _id: {
            type: Number,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          release_date: {
            type: String,
            required: true,
          },
          overview: {
            type: String,
            required: true,
          },
          poster_path: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
    watched: {
      type: [
        {
          _id: {
            type: Number,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          release_date: {
            type: String,
            required: true,
          },
          overview: {
            type: String,
            required: true,
          },
          poster_path: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
    watchLater: {
      type: [
        {
          _id: {
            type: Number,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          release_date: {
            type: String,
            required: true,
          },
          overview: {
            type: String,
            required: true,
          },
          poster_path: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

userSchema.pre("save", async function (next) {
  
  const user = this;
 
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  
  next();
});

export default model("User", userSchema);
