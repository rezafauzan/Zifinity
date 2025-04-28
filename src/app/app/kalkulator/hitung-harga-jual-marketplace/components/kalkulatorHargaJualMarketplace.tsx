'use client'
import { useState } from "react"
import styles from "./style/kalkulatorHargaJualMarketplace.module.css"
import Section from "@/components/section"

const FormKalkulatorHargaJual: React.FC = () => {
    const [hargaJual, setHargaJual] = useState<number | null>(null)
    const [hargaDasar, setHargaDasar] = useState("")
    const [targetKeuntungan, setTargetKeuntungan] = useState("")
    const [biayaLayanan, setBiayaLayanan] = useState(10)

    function handleHargaDasarChange(e: React.ChangeEvent<HTMLInputElement>) {
        const formatted = formatRupiah(e.target.value)
        setHargaDasar(formatted)
    }

    function handleTargetKeuntunganChange(e: React.ChangeEvent<HTMLInputElement>) {
        const formatted = formatRupiah(e.target.value)
        setTargetKeuntungan(formatted)
    }

    function handleBiayaLayananChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value = parseInt(e.target.value, 10)

        if (isNaN(value)) {
            value = 0
        }

        if (value > 100) {
            value = 100
        } else if (value < 0) {
            value = 0
        }

        setBiayaLayanan(value)
    }

    const hitungHargaJual = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    
        const hargaDasarAngka = parseInt(hargaDasar.replace(/[^\d]/g, ""), 10) || 0


    
        const targetKeuntunganAngka = parseInt(targetKeuntungan.replace(/[^\d]/g, ""), 10) || 0

    
        const biayaLayananPersen = biayaLayanan / 100 || 0

    
        const formData = new FormData(e.currentTarget)
        const statusGratisOngkir = formData.get("status-gratis-ongkir") as string
        let biayaSubsidiOngkir = 0
        if (statusGratisOngkir === "aktif") {
            const ongkirPotongan = hargaDasarAngka * 0.1
            biayaSubsidiOngkir = Math.min(ongkirPotongan, 10000)
        }
    
        const hasilHargaJual = (hargaDasarAngka + targetKeuntunganAngka + biayaSubsidiOngkir) / (1 - biayaLayananPersen / 100)

        setHargaJual(hasilHargaJual)
    }


    function formatRupiah(value: string) {
    
        const numberString = value.replace(/[^\d]/g, "")
        const number = parseInt(numberString, 10)

        if (isNaN(number)) {
            return ""
        }

    
        return `Rp${number.toLocaleString("id-ID")},-`
    }


    return (
        <form onSubmit={hitungHargaJual} className={styles.form_kalkulator_harga_jual}>
            <div className={styles.form_container}>
                <div className={styles.field_group}>
                    <label htmlFor="platform">Platform</label>
                    <select name="platform" id="platform">
                        <option value="blibli" disabled>Blibli</option>
                        <option value="bukalapak" disabled>Bukalapak</option>
                        <option value="lazada" disabled>Lazada</option>
                        <option value="shopee">Shopee</option>
                        <option value="tiktok">Tiktok</option>
                        <option value="tokopedia" disabled>Tokopedia</option>
                    </select>
                </div>

                <div className={styles.field_group}>
                    <label htmlFor="kategori-produk">Kategori Produk</label>
                    <select name="kategori-produk" id="kategori-produk">
                        <option value="elektronik">Elektronik</option>
                        <option value="fashion">Fashion</option>
                    </select>
                </div>

                <div className={styles.field_group}>
                    <label htmlFor="harga-dasar">Harga Dasar</label>
                    <input type="text" name="harga-dasar" id="harga-dasar" placeholder="Rp.70.000,-" value={hargaDasar} onChange={handleHargaDasarChange} />
                </div>

                <div className={styles.field_group}>
                    <label htmlFor="target-keuntungan">Target Keuntungan</label>
                    <input type="text" name="target-keuntungan" id="target-keuntungan" placeholder="Rp.4.000,-" value={targetKeuntungan} onChange={handleTargetKeuntunganChange} />
                </div>

                <div className={styles.field_group}>
                    <label htmlFor="biaya-layanan">Persen Biaya Layanan (%)</label>
                    <input type="number" name="biaya-layanan" id="biaya-layanan" min="0" max="100" value={biayaLayanan} onChange={handleBiayaLayananChange} />
                </div>

                <div className={styles.field_group}>
                    <label>Status Gratis Ongkir</label>
                    <div className={styles.status_gratis_ongkir}>
                        <input type="radio" name="status-gratis-ongkir" id="gratis-aktif" value="aktif" />
                        <label htmlFor="gratis-aktif">Aktif</label>
                        <input type="radio" name="status-gratis-ongkir" id="gratis-tidak" value="tidak" />
                        <label htmlFor="gratis-tidak">Tidak Aktif</label>
                    </div>
                </div>

                <div className={styles.field_group}>
                    <label>Harga Jual</label>
                    <output id="harga-jual" className={styles.output_harga_jual}>
                        {hargaJual !== null ? `Rp${hargaJual.toLocaleString("id-ID")}` : "-"}
                    </output>
                </div>

                <button type="submit" className={styles.button_submit}>
                    Hitung
                </button>
            </div>
        </form>
    )
}

const KalkulatorHargaJualMarketplace: React.FC = () => {
    return (
        <Section id={"hitung-harga-jual-marketplace"} sectionStyleClass={styles.section} containerStyleClass={styles.container} sectionHeadStyleClass={styles.sectionHead} sectionBodyStyleClass={styles.sectionBody} headContent={<h1>Kalkulator Harga Jual Marketplace</h1>} bodyContent={<FormKalkulatorHargaJual />} />
    )
}

export default KalkulatorHargaJualMarketplace