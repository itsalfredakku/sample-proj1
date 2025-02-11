import React, { useState } from "react";
import Card from "./card";
import Row from "./row";
import Column from "./column";
import Stack from "./stack";

export default function LayoutConfigurator() {
  const [alignItems, setAlignItems] = useState<React.CSSProperties["alignItems"]>("flex-start");
  const [justifyContent, setJustifyContent] = useState<React.CSSProperties["justifyContent"]>("flex-start");
  const [gap, setGap] = useState("1rem");

  return (
    <>
      <Card className="rz-my-6">
        <Stack orientation="horizontal" alignItems="flex-start" gap="1rem">
          <Stack orientation="vertical" gap="4px">
            Align Items
            <select value={alignItems} onChange={(e) => setAlignItems(e.target.value as React.CSSProperties["alignItems"])} aria-label="align items">
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="stretch">stretch</option>
            </select>
          </Stack>
          <Stack orientation="vertical" gap="4px">
            Justify Content
            <select value={justifyContent} onChange={(e) => setJustifyContent(e.target.value as React.CSSProperties["justifyContent"])} aria-label="justify content">
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="space-between">space-between</option>
            </select>
          </Stack>
          <Stack orientation="vertical" gap="4px">
            Gap
            <input type="text" value={gap} onChange={(e) => setGap(e.target.value)} aria-label="gap" />
          </Stack>
        </Stack>
      </Card>

      <Row justifyContent={justifyContent} alignItems={alignItems} gap={gap} className="rz-border-info-light" >
        <Column>
          {/* ...existing styles... */}
          <div style={{ backgroundColor: "#d0ebff", padding: "1rem", textAlign: "center" }}>Column 1</div>
        </Column>
        <Column>
          <div style={{ backgroundColor: "#d3f9d8", padding: "1rem", textAlign: "center", height: "60px" }}>Column 2</div>
        </Column>
        <Column>
          <div style={{ backgroundColor: "#fff3bf", padding: "1rem", textAlign: "center", height: "120px" }}>Column 3</div>
        </Column>
        <Column>
          <div style={{ backgroundColor: "#ffa8a8", padding: "1rem", textAlign: "center", height: "180px" }}>Column 4</div>
        </Column>
      </Row>
    </>
  );
}
