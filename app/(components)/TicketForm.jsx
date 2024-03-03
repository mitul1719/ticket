"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "",
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = new FormData(e.target);

    let data = {};
    for (let [key, value] of formValues) {
      if (key === "priority" || key === "progress") {
        data[key] = +value;
      }
      data[key] = value;
    }

    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify(data),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket");
    } else {
      toast(res.statusText);
      // router.push("/");
    }

    // router.refresh();
    // router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" method="POST" onSubmit={handleSubmit}>
        <h3>Create your ticket</h3>
        <label>Title</label>
        <input id="title" type="text" name="title" required />

        <label htmlFor="description">Description</label>
        <textarea id="description" type="text" name="description" required />

        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option value="Feature">Feature</option>
          <option value="Bug">Bug</option>
          <option value="Hot Fix">Hot Fix</option>
        </select>

        <label htmlFor="priority">Priority</label>
        <select id="priority" name="priority">
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
        </select>

        <label htmlFor="progress">Progress</label>
        <input type="range" id="progress" name="progress" min={0} max={100} />

        <label htmlFor="status">Status</label>
        <select id="status" name="status">
          <option value="-1">Not Done</option>
          <option value="0">Working</option>
          <option value="1">Done</option>
        </select>

        <input type="submit" className="btn" value="CREATE TICKET" />
      </form>
    </div>
  );
};

export default TicketForm;
