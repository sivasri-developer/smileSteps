import Child from "../models/Child.js";

// Get all children
const getChildren = async (req, res) => {
  try {
    const children = await Child.find();

    res.status(200).json(children);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get one child by ID
const getChildById = async (req, res) => {
  try {
    const child = await Child.findById(req.params.id);

    if (!child) {
      return res.status(404).json({
        message: "Child not found",
      });
    }

    res.status(200).json(child);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  getChildren,
  getChildById,
};