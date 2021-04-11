const express = require("express");
const app = require("./models/Apps");
const router = express.Router();

// Get all apps
router.get("/apps", async (req, res) => {
    try {
        const apps = await App.find();
        res.send(apps);
    } catch {
        res.status(404);
        res.send({ error: "Get request error" });
    }
});

// Get specific app
router.get("/apps/:id", async (req, res) => {
    try {
        const app = await app.findOne({ _id: req.params.id });
        res.send(app);
    } catch {
        res.status(404);
        res.send({ error: "ID incorrect: Post doesn't exist" });
    }
})

// Create new app
router.post("/apps", async (req, res) => {
    try {
        const app = new App({
            linkto: req.body.linkto,
            imagelink: req.body.imagelink,
            titles: req.body.titles
        });

        await app.save();
        res.send(app);
    } catch {
        res.status(404);
        res.send({ error: "Post request error" });
    }
});

// Update existing app
router.patch("/apps/:id", async (req, res) => {
    try {
        const app = await app.findOne({ _id: req.params.id });

        if (req.body.linkto) {
            app.linkto = req.body.linkto;
        }
        if (req.body.imagelink) {
            app.imaglink = req.body.imagelink;
        }
        if (req.body.titles) {
            app.titles = req.body.titles;
        }

        await app.save();
        res.send(app);
    } catch {
        res.status(404);
        res.send({ error: "ID incorrect: Post doesn't exist" });
    }
});

// Delete app
router.delete("/apps/:id", async (req, res) => {
    try {
        await app.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "ID incorrect: Post doesn't exist" });
    }
});

module.exports = router;