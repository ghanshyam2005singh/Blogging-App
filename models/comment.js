const { Schema, model} = require("mongoose");

const commentSchema = new Schema (
    {
        content: {
            type: String,
            required: true,
        },
        blogId: {
            type: Schema.Types.objectId,
            ref: "blog",
        },
        createdBy: {
            type: Schema.Types.objectId,
            ref: "user",
        },
    },
        { timestamps: true}
);

const Comment = model("comment", commentSchema);

module.exports = Comment;