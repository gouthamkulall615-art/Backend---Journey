import express from "express";
import { existsSync } from "fs";
const router = express.Router();

console.log("members file loading");

let members = [
  {
    id: 1,
    name: "Goutham",
    role: "Web Dev",
    status: "active",
  },
  {
    id: 2,
    name: "Eshwar",
    role: "Fronted Dev",
    status: "active",
  },
  {
    id: 3,
    name: "Gourav",
    role: "Devops Eng",
    status: "active",
  },
];

router.get("/", (req, res) => {
  const { role } = req.query;
  if (role) {
    const filtered = members.filter(
      (m) => m.role.toLowerCase() === role.toLowerCase(),
    );
    return res.status(200).json(filtered);
  }
  const activeMembers = members.filter((m) => m.status === "active");
  res.status(200).json(activeMembers);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const member = members.find((member) => member.id === id);
  if (!member) {
    return res
      .status(404)
      .json({ message: `member with ${id} is not found in the team` });
  }
  res.status(200).json(member);
});

router.post("/", (req, res) => {
  console.log("BODY:", req.body);
  const { name, role } = req.body;
  if (!name || !role) {
    return res
      .status(400)
      .json({ message: "please enter the name and role of the member" });
  }
  const newMember = {
    id: members.length + 1,
    name,
    role,
    status: "active",
  };
  members.push(newMember);
  res
    .status(201)
    .json({ message: "member added successfully", member: newMember });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const member = members.find((m) => m.id === id);
  if (!member) {
    return res.status(404).json({ message: `member with id ${id} not found` });
  }

  if (member.status === "fired") {
    return res.status(400).json({ message: "cannot update a fired memeber" });
  }

  const { name, role } = req.body;
  if (name) member.name = name;
  if (role) member.role = role;

  res.status(200).json({ message: "member updated successfully", member });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const member = members.find((m) => m.id === id);
  if (!member) {
    return res.status(404).json({ message: `member with id ${id} not found` });
  }

  if (member.status === "fired") {
    return res.status(400).json({ message: "cannot update a fired memeber" });
  }
  member.status = "fired";
  res.status(200).json({ message: "member has been fired" });
});

export default router;
