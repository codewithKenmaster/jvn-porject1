const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3010; /*I am using port 3010 due to I have a container running in my computer using that port :) */

app.use(express.static("public"));
app.get("/api/package/:name", async (req, res) => {
  const packageName = req.params.name;
  /* logical structure to display package info*/
  try {
    const response = await axios.get(
      `https://registry.npmjs.org/${packageName}`,
    );
    const data = response.data;

    const latest = data["dist-tags"].latest;
    const versionData = data.versions[latest];
    const downloadsResponse = await axios.get(
      `https://api.npmjs.org/downloads/point/last-week/${packageName}`,
    );
    const weeklyDownloads = downloadsResponse.data.downloads;

    const report = {
      name: data.name,
      version: latest,
      license: versionData.license || "Unknown",
      dependencies: versionData.dependencies
        ? Object.keys(versionData.dependencies).length
        : 0,
      unpackedSize: versionData.dist.unpackedSize,
      weeklyDownloads: weeklyDownloads,
      lastPublish: data.time[latest],
    };
    res.json(
      report,
    ); /* response data will be converted to JSON format and will be pass in to the report variable*/
  } catch (error) /*catch error logic if any */ {
    res.status(404).json({ error: " Package not found" });
  }
});

app.listen(PORT, () => {
  console.log(
    `Server is running in port ${PORT}`,
  ); /*will log the the running server port */
});
