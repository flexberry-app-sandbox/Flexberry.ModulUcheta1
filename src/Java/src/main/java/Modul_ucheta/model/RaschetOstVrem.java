package Modul_ucheta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_ucheta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: РасчетОстВрем
 */
@Entity(name = "IISModul_uchetaРасчетОстВрем")
@Table(schema = "public", name = "РасчетОстВрем")
public class RaschetOstVrem {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВремяПоДоговору")
    private Double времяподоговору;

    @Column(name = "ЕдВремени")
    private String едвремени;

    @Column(name = "Использовано")
    private Double использовано;

    @Column(name = "Доступно")
    private Double доступно;

    @OneToMany(mappedBy = "raschetostvrem", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<OkazUslug> okazuslugs;


    public RaschetOstVrem() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getВремяПоДоговору() {
      return времяподоговору;
    }

    public void setВремяПоДоговору(Double времяподоговору) {
      this.времяподоговору = времяподоговору;
    }

    public String getЕдВремени() {
      return едвремени;
    }

    public void setЕдВремени(String едвремени) {
      this.едвремени = едвремени;
    }

    public Double getИспользовано() {
      return использовано;
    }

    public void setИспользовано(Double использовано) {
      this.использовано = использовано;
    }

    public Double getДоступно() {
      return доступно;
    }

    public void setДоступно(Double доступно) {
      this.доступно = доступно;
    }


}