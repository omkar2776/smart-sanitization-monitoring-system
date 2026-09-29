# Sensor Test Plan

| Sensor | Test | Expected result | Status |
|--------|------|-----------------|--------|
| PIR | Move in front of sensor | Occupancy = occupied | Pending |
| PIR | No movement for timeout period | Occupancy = vacant | Pending |
| Water level | Empty vs full container | Level changes from low to high | Pending |
| Air quality | Expose to a known odor source | Reading rises above baseline | Pending |
| Water flow | Run tap for a fixed time | Flow count increases | Pending |

## End-to-end check
1. Trigger a sensor reading on the ESP32.
2. Confirm the reading is received by the backend.
3. Confirm the dashboard widget updates.

Exact value ranges will be calibrated during hardware testing.
Related issue: #7
Test environment: ESP32 dev board with sensors on breadboard
