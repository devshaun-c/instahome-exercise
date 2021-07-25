import React, { useState, useEffect } from "react";
import "react-day-picker/lib/style.css";
import DayPicker, { DateUtils } from "react-day-picker";
import { createUseStyles } from "react-jss";

const SCHEDULE_TYPE = { single: "single", multi: "multi", range: "range" };

const useStyles = createUseStyles((theme) => ({}));

const Datepicker = (props) => {
  const classes = useStyles();
  const { type = SCHEDULE_TYPE.single, handleSelected } = props;

  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [multiDayObj, setMultiDayObj] = useState({
    from: undefined,
    to: undefined,
  });

  const handleSingleDayClick = (day, modifiers = {}) => {
    var selected;
    if (modifiers.disabled) {
      return;
    } else {
      selected = modifiers.selected;
    }
    setSelectedDay(selected ? undefined : day);

    if (handleSelected) {
      handleSelected(day);
    }
  };

  const handleMultiDayClick = (day, modifiers = {}) => {
    var selected;
    if (modifiers.disabled) {
      return;
    } else {
      selected = modifiers.selected;
    }

    const newSelectedDates = [...selectedDates];
    if (selected) {
      const selectedIndex = newSelectedDates.findIndex((selectedDay) =>
        DateUtils.isSameDay(selectedDay, day)
      );
      newSelectedDates.splice(selectedIndex, 1);
    } else {
      newSelectedDates.push(day);
    }

    setSelectedDates(newSelectedDates);
    if (handleSelected) {
      handleSelected(newSelectedDates);
    }
  };

  const handleRangeClick = (day, modifiers) => {
    if (modifiers.disabled) {
      return;
    }
    const range = DateUtils.addDayToRange(day, multiDayObj);

    setMultiDayObj(range);
    if (handleSelected) {
      handleSelected(range);
    }
  };

  const { from, to } = multiDayObj;
  const modifiers = { start: from, end: to };

  return (
    <>
      {(() => {
        switch (type) {
          case SCHEDULE_TYPE.single:
            return (
              <DayPicker
                disabledDays={{ before: new Date() }}
                month={new Date()}
                selectedDays={selectedDay}
                canChangeMonth={true}
                onDayClick={handleSingleDayClick}
                required
              />
            );

          case SCHEDULE_TYPE.multi:
            return (
              <DayPicker
                disabledDays={{ before: new Date() }}
                month={new Date()}
                selectedDays={selectedDates}
                canChangeMonth={true}
                onDayClick={handleMultiDayClick}
                required
              />
            );

          case SCHEDULE_TYPE.range:
            return (
              <DayPicker
                className="Selectable"
                disabledDays={{ before: new Date() }}
                selectedDays={[from, { from, to }]}
                month={new Date()}
                modifiers={modifiers}
                canChangeMonth
                onDayClick={handleRangeClick}
                required
              />
            );
        }
      })()}
    </>
  );
};

export default Datepicker;
