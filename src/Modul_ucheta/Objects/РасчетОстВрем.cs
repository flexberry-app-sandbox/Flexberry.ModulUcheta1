﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Modul_ucheta
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расчет ост врем.
    /// </summary>
    // *** Start programmer edit section *** (РасчетОстВрем CustomAttributes)

    // *** End programmer edit section *** (РасчетОстВрем CustomAttributes)
    [AutoAltered()]
    [Caption("Расчет ост врем")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасчетОстВремE", new string[] {
            "ВремяПоДоговору as \'Время по договору\'",
            "ЕдВремени as \'Единица времени\'",
            "Использовано as \'Использовано\'",
            "Доступно as \'Доступно\'"})]
    [AssociatedDetailViewAttribute("РасчетОстВремE", "ОказУслуг", "ОказУслугE", true, "", "Оказание услуг", true, new string[] {
            ""})]
    [View("РасчетОстВремL", new string[] {
            "ВремяПоДоговору as \'Время по договору\'",
            "ЕдВремени as \'Единица времени\'",
            "Использовано as \'Использовано\'",
            "Доступно as \'Доступно\'"})]
    public class РасчетОстВрем : ICSSoft.STORMNET.DataObject
    {
        
        private double fВремяПоДоговору;
        
        private IIS.Modul_ucheta.ЕдВремени fЕдВремени;
        
        private double fИспользовано;
        
        private double fДоступно;
        
        private IIS.Modul_ucheta.DetailArrayOfОказУслуг fОказУслуг;
        
        // *** Start programmer edit section *** (РасчетОстВрем CustomMembers)

        // *** End programmer edit section *** (РасчетОстВрем CustomMembers)

        
        /// <summary>
        /// ВремяПоДоговору.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору CustomAttributes)
        public virtual double ВремяПоДоговору
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Get start)

                // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Get start)
                double result = this.fВремяПоДоговору;
                // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Get end)

                // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Set start)

                // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Set start)
                this.fВремяПоДоговору = value;
                // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Set end)

                // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Set end)
            }
        }
        
        /// <summary>
        /// Доступно.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.Доступно CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.Доступно CustomAttributes)
        public virtual double Доступно
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.Доступно Get start)

                // *** End programmer edit section *** (РасчетОстВрем.Доступно Get start)
                double result = this.fДоступно;
                // *** Start programmer edit section *** (РасчетОстВрем.Доступно Get end)

                // *** End programmer edit section *** (РасчетОстВрем.Доступно Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.Доступно Set start)

                // *** End programmer edit section *** (РасчетОстВрем.Доступно Set start)
                this.fДоступно = value;
                // *** Start programmer edit section *** (РасчетОстВрем.Доступно Set end)

                // *** End programmer edit section *** (РасчетОстВрем.Доступно Set end)
            }
        }
        
        /// <summary>
        /// ЕдВремени.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.ЕдВремени CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.ЕдВремени CustomAttributes)
        public virtual IIS.Modul_ucheta.ЕдВремени ЕдВремени
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ЕдВремени Get start)

                // *** End programmer edit section *** (РасчетОстВрем.ЕдВремени Get start)
                IIS.Modul_ucheta.ЕдВремени result = this.fЕдВремени;
                // *** Start programmer edit section *** (РасчетОстВрем.ЕдВремени Get end)

                // *** End programmer edit section *** (РасчетОстВрем.ЕдВремени Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ЕдВремени Set start)

                // *** End programmer edit section *** (РасчетОстВрем.ЕдВремени Set start)
                this.fЕдВремени = value;
                // *** Start programmer edit section *** (РасчетОстВрем.ЕдВремени Set end)

                // *** End programmer edit section *** (РасчетОстВрем.ЕдВремени Set end)
            }
        }
        
        /// <summary>
        /// Использовано.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.Использовано CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.Использовано CustomAttributes)
        public virtual double Использовано
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.Использовано Get start)

                // *** End programmer edit section *** (РасчетОстВрем.Использовано Get start)
                double result = this.fИспользовано;
                // *** Start programmer edit section *** (РасчетОстВрем.Использовано Get end)

                // *** End programmer edit section *** (РасчетОстВрем.Использовано Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.Использовано Set start)

                // *** End programmer edit section *** (РасчетОстВрем.Использовано Set start)
                this.fИспользовано = value;
                // *** Start programmer edit section *** (РасчетОстВрем.Использовано Set end)

                // *** End programmer edit section *** (РасчетОстВрем.Использовано Set end)
            }
        }
        
        /// <summary>
        /// Расчет ост врем.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.ОказУслуг CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.ОказУслуг CustomAttributes)
        public virtual IIS.Modul_ucheta.DetailArrayOfОказУслуг ОказУслуг
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ОказУслуг Get start)

                // *** End programmer edit section *** (РасчетОстВрем.ОказУслуг Get start)
                if ((this.fОказУслуг == null))
                {
                    this.fОказУслуг = new IIS.Modul_ucheta.DetailArrayOfОказУслуг(this);
                }
                IIS.Modul_ucheta.DetailArrayOfОказУслуг result = this.fОказУслуг;
                // *** Start programmer edit section *** (РасчетОстВрем.ОказУслуг Get end)

                // *** End programmer edit section *** (РасчетОстВрем.ОказУслуг Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ОказУслуг Set start)

                // *** End programmer edit section *** (РасчетОстВрем.ОказУслуг Set start)
                this.fОказУслуг = value;
                // *** Start programmer edit section *** (РасчетОстВрем.ОказУслуг Set end)

                // *** End programmer edit section *** (РасчетОстВрем.ОказУслуг Set end)
            }
        }
        
        // *** Start programmer edit section *** (РасчетОстВрем.Отправить CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (РасчетОстВрем.Отправить method implementation)
            return;
            // *** End programmer edit section *** (РасчетОстВрем.Отправить method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасчетОстВремE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетОстВремE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетОстВремE", typeof(IIS.Modul_ucheta.РасчетОстВрем));
                }
            }
            
            /// <summary>
            /// "РасчетОстВремL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетОстВремL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетОстВремL", typeof(IIS.Modul_ucheta.РасчетОстВрем));
                }
            }
        }
    }
}
