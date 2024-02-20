const Report = require("../models/ReportModel");

exports.addReport = async (req, res) => {
  try {
    if (req.body.isSent) {
      const report = new Report(req.body);
      await report.save();
      res.status(201).json(report);
    } else {
      // const dogHandler =
      // const report = new Report(req.body);
      // await report.save();
      // res.status(201).json(report);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllReportsByDogHandlerId = async (req, res) => {
  try {
    const reports = await Report.find({ dogHandler: req.params.dogHandlerId });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
