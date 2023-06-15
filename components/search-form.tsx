import type { NextPage } from "next";
import { useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./search-form.module.css";
const SearchForm: NextPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchForm}>
        <div className={styles.inputsRow}>
          <div className={styles.inputGroup}>
            <Autocomplete
              className={styles.departureField}
              disablePortal
              options={[
                "Singapore (SIN)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)Sanya (SYX)",
              ]}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Departure"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Singapore -  Changi (SIN)"
              size="medium"
            />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.arrivalField}>
              <div className={styles.input}>
                <div className={styles.labelContainer}>
                  <div className={styles.arrival}>Arrival</div>
                </div>
                <div className={styles.active}>
                  <div className={styles.muiautocompletetag}>
                    <div className={styles.chip}>
                      <div className={styles.container}>
                        <div className={styles.avatar}>
                          <div className={styles.op}>F</div>
                        </div>
                        <div className={styles.typography}>
                          <div className={styles.chip1}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon}
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.chip}>
                      <div className={styles.container}>
                        <div className={styles.avatar}>
                          <div className={styles.op}>F</div>
                        </div>
                        <div className={styles.typography}>
                          <div className={styles.chip1}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon}
                          alt=""
                          src="/cancel1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.losAngelesLa}>Los Angeles (LA)</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.departureField}>
              <DatePicker
                label="Date"
                value={dateFieldDateTimePickerValue}
                onChange={(newValue: any) => {
                  setDateFieldDateTimePickerValue(newValue);
                }}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    color="primary"
                    variant="outlined"
                    size="medium"
                    renderInput={{ placeholder: "01/05/2022" }}
                    helperText=""
                    fullWidth
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.searchFlightsButton}>
            <div className={styles.button}>Search flights</div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchForm;
