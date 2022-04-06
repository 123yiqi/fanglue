<template>
  <div
    id="myDiagramDiv"
    style="width: 1000px; height: 800px; background-color: #dae4e4"
  ></div>
</template>
<script>
import gojs from "gojs";
export default {
  name: "go",
  methods: {
    gos() {
      // const myDiagram = new gojs.Diagram("myDiagramDiv", {
      //   // enable Ctrl-Z to undo and Ctrl-Y to redo
      //   "undoManager.isEnabled": true,
      // });

      // myDiagram.model = new gojs.Model([
      //   //  对于中国array中的每个对象使用Diagram创建一个node来表示
      //   { key: "Alpha" },
      //   { key: "Beta" },
      //   { key: "Gamma" },
      // ]);

      // const myDiagram = new gojs.Diagram("myDiagramDiv", {
      //   "undoManager.isEnabled": true,
      // });

      // // define a simple Node template
      // myDiagram.nodeTemplate = new gojs.Node("Horizontal", {
      //   background: "#44CCFF",
      // })
      //   .add(
      //     new gojs.Picture({
      //       margin: 10,
      //       width: 50,
      //       height: 50,
      //       background: "red",
      //     }).bind("source")
      //   )
      //   .add(
      //     new gojs.TextBlock("Default Text", {
      //       margin: 12,
      //       stroke: "white",
      //       font: "bold 16px sans-serif",
      //     }).bind("text", "name")
      //   );

      // myDiagram.model = new gojs.Model([
      //   { name: "Don Meow", source: "cat1.png" },
      //   { name: "Copricat", source: "cat2.png" },
      //   { name: "Demeter", source: "cat3.png" },
      //   { name: "屈晓东" },
      // ]);

      const myDiagram = new gojs.Diagram("myDiagramDiv", {
        "undoManager.isEnabled": true,
      });

      // the template we defined earlier
      myDiagram.nodeTemplate = new gojs.Node("Horizontal", {
        background: "#44CCFF",
      })
        .add(
          new gojs.Picture({
            margin: 10,
            width: 50,
            height: 50,
            background: "red",
          }).bind("source")
        )
        .add(
          new gojs.TextBlock("Default Text", {
            margin: 12,
            stroke: "white",
            font: "bold 16px sans-serif",
          }).bind("text", "name")
        );

      myDiagram.model = new gojs.TreeModel([
        // the "key" and "parent" property names are required,
        // but you can add whatever data properties you need for your app
        { key: "1", name: "Don Meow", source: "cat1.png" },
        { key: "2", parent: "1", name: "Demeter", source: "cat2.png" },
        { key: "3", parent: "1", name: "Copricat", source: "cat3.png" },
        { key: "4", parent: "1", name: "Jellylorum", source: "cat4.png" },
        { key: "5", parent: "1", name: "Alonzo", source: "cat5.png" },
        { key: "6", parent: "1", name: "Munkustrap", source: "cat6.png" },
      ]);
    },
  },
  mounted() {
    this.gos();
  },
};
</script>
