/*

 CreateDataBase.ts

*/

// Import D3 Fetch
import * as d3 from 'd3-fetch'

// Import Node Fetch.
import fetch from 'node-fetch'

// Import InterFace.
import { TimeAlignmentTypes, CityCheckedTypes, CountryNameTypes } from '@/types/interface'

export default class CreateDataBase {
  // Types.
  url: string
  dataCSV: string
  foreignTouristsCSV: string
  dataBaseJapanese: object[]
  dataBaseTourists: object[]
  dataBaseTimeAlignment: []
  dataBaseCityChecked: []
  dataBaseCountryName: []

  constructor() {
    this.url = window.location.origin
    this.dataCSV = `${this.url}/csv/data.csv`
    this.foreignTouristsCSV = `${this.url}/csv/foreignTourists.csv`
    this.dataBaseJapanese = []
    this.dataBaseTourists = []
    this.dataBaseTimeAlignment = []
    this.dataBaseCityChecked = []
    this.dataBaseCountryName = []
  }

  createDataBaseJapanese() {
    d3.csv(this.dataCSV).then(csv => {
      csv.map(csvInfo => {
        const addCity = csvInfo.city
        const addGender = csvInfo.gender
        const addPopulation = csvInfo.population
        let addMridiem
        let addTime
        let addCityJP
        let addCityEN
        let addCityLowerEN
        let addButtonPC
        let addButtonSP

        this.dataBaseTimeAlignment.map((timeInfo: TimeAlignmentTypes) => {
          if (csvInfo.time === timeInfo.militaryTime) {
            addMridiem = timeInfo.meridiem
            addTime = timeInfo.time
          }
        })

        this.dataBaseCityChecked.map((cityInfo: CityCheckedTypes) => {
          if (csvInfo.city === cityInfo.searchWord) {
            addCityJP = cityInfo.cityJP
            addCityEN = cityInfo.cityEN
            addCityLowerEN = cityInfo.cityLowerEN
            addButtonPC = cityInfo.buttonPC
            addButtonSP = cityInfo.buttonSP
          }
        })

        const thisDataBaseDetail = {
          meridiem: addMridiem,
          time: addTime,
          city: addCity,
          cityJP: addCityJP,
          cityEN: addCityEN,
          cityLowerEN: addCityLowerEN,
          buttonPC: addButtonPC,
          buttonSP: addButtonSP,
          gender: addGender,
          population: addPopulation
        }

        this.dataBaseJapanese.push(thisDataBaseDetail)
      })
    })
  }

  createDataBaseTourists() {
    d3.csv(this.foreignTouristsCSV).then(csv => {
      csv.map(csvInfo => {
        const addCity = csvInfo.city
        const addPopulation = csvInfo.population
        let addMridiem
        let addTime
        let addCityJP
        let addCityEN
        let addCityLowerEN
        let addButtonPC
        let addButtonSP
        let addCountryNameJP
        let addCountryNameEN
        let addFlagPath

        this.dataBaseTimeAlignment.map((timeInfo: TimeAlignmentTypes) => {
          if (csvInfo.time === timeInfo.militaryTime) {
            addMridiem = timeInfo.meridiem
            addTime = timeInfo.time
          }
        })

        this.dataBaseCityChecked.map((cityInfo: CityCheckedTypes) => {
          if (csvInfo.city === cityInfo.searchWord) {
            addCityJP = cityInfo.cityJP
            addCityEN = cityInfo.cityEN
            addCityLowerEN = cityInfo.cityLowerEN
            addButtonPC = cityInfo.buttonPC
            addButtonSP = cityInfo.buttonSP
          }
        })

        this.dataBaseCountryName.map((countryInfo: CountryNameTypes) => {
          if (csvInfo.country === countryInfo.countryNameJP) {
            addCountryNameJP = countryInfo.countryNameJP
            addCountryNameEN = countryInfo.countryNameEN
            addFlagPath = countryInfo.flagPath
          }
        })

        const thisDataBaseDetail = {
          meridiem: addMridiem,
          time: addTime,
          city: addCity,
          cityJP: addCityJP,
          cityEN: addCityEN,
          cityLowerEN: addCityLowerEN,
          buttonPC: addButtonPC,
          buttonSP: addButtonSP,
          countryNameJP: addCountryNameJP,
          countryNameEN: addCountryNameEN,
          flagPath: addFlagPath,
          population: addPopulation
        }

        this.dataBaseTourists.push(thisDataBaseDetail)
      })
    })
  }

  // Async.
  async callDataBase() {
    try {
      const responseTimeAlignment = await fetch(`${this.url}/json/timeAlignment.json`)
      const responseCityChecked = await fetch(`${this.url}/json/cityChecked.json`)
      const responseCountryName = await fetch(`${this.url}/json/countryName.json`)
      this.dataBaseTimeAlignment = await responseTimeAlignment.json()
      this.dataBaseCityChecked = await responseCityChecked.json()
      this.dataBaseCountryName = await responseCountryName.json()
      this.createDataBaseJapanese()
      this.createDataBaseTourists()
    } catch (error) {
      console.log(error)
    }
  }

  // Promise Resolve.
  resolveDataBase() {
    return new Promise(resolve => {
      resolve(this.callDataBase())
    })
  }

  get propDataBaseJapanese() {
    return this.dataBaseJapanese
  }

  get propDataBaseTourists() {
    return this.dataBaseTourists
  }

  get propDataBaseTimeAlignment() {
    return this.dataBaseTimeAlignment
  }

  get propDataBaseCityChecked() {
    return this.dataBaseCityChecked
  }

  get propDataBaseCountryName() {
    return this.dataBaseCountryName
  }
}
